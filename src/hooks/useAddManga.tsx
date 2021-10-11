import { useState, useContext, useCallback, ChangeEvent } from "react";
import axios from "axios";

import { db } from "./../firebase";
import { AuthContext } from "../providers/Auth";
import { useFlashMessage } from "./useFlashMessage";
import { useFormValidation } from "./useFormValidation";
import { getRakutenApiRequestURL } from "../rakutenApiInfo";
import { rakutenApiResType } from "../rakutenApiInfo";

export const useAddManga = () => {
  const [mangaTitle, setMangaTitle] = useState<string>("");
  const [mangaPublisher, setMangaPublisher] = useState<string>("");
  const [mangaAuthor, setMangaAuthor] = useState<string>("");
  const { currentUser } = useContext(AuthContext);
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();
  const {
    mangaTitleValidation,
    mangaPublisherValidation,
    mangaAuthorValidation,
    mangaTitleValidationMsg,
    mangaTitleIsValid,
    mangaPublisherValidationMsg,
    mangaPublisherIsValid,
    mangaAuthorValidationMsg,
    mangaAuthorIsValid,
  } = useFormValidation();

  type MangaInfo = {
    title: string;
    publisher: string;
    author: string;
  };

  const userId: string | null = currentUser ? currentUser.uid : null;

  const onChangeInputMangaTitle = async (e: ChangeEvent<HTMLInputElement>) => {
    mangaTitleValidation(e.target.value);
    setMangaTitle(e.target.value);
    await fetchManagInfoByTitle(e.target.value);
  };

  const onChangeInputMangaPublisher = (e: ChangeEvent<HTMLInputElement>) => {
    mangaPublisherValidation(e.target.value);
    setMangaPublisher(e.target.value);
  };

  const onChangeInputMangaAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    mangaAuthorValidation(e.target.value);
    setMangaAuthor(e.target.value);
  };

  const fetchManagInfoByTitle = async (title: string) => {
    if (title === "") return;
    const requestURL = getRakutenApiRequestURL(title);
    await sleep(500);
    const res = await axios.get(requestURL);
    if (res) {
      const mangaData: rakutenApiResType = res.data;
      const mangaInfo: MangaInfo[] = mangaData.Items.map((data) => {
        return {
          title: formatMangaTitle(data.Item.title),
          publisher: data.Item.publisherName,
          author: data.Item.author,
        };
      });
      console.log(mangaInfo);
      console.log(deleteDuplication(mangaInfo));
    }
  };

  const formatMangaTitle = (title: string) => {
    // タイトルの巻数を削除
    const regExps = [/[(（][0-9]{1,}[）)]/, /\s[0-9]{1,}$/];
    let formatedTitle = title;
    regExps.forEach((regExp) => {
      formatedTitle = formatedTitle.replace(regExp, "");
    });
    return formatedTitle;
  };

  // スリープ関数
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // 漫画タイトルによる重複削除
  const deleteDuplication = (data: MangaInfo[]) => {
    return data.reduce((acc: MangaInfo[], obj) => {
      const key = obj.title;
      let isDuplicated = false;
      if (acc.length > 0) {
        isDuplicated = acc.some((val) => {
          return val.title === key;
        });
      }
      if (isDuplicated) {
        return acc;
      }
      acc.push(obj);
      return acc;
    }, []);
  };

  const postManga = useCallback(async () => {
    if (!userId) {
      alert("ユーザーID取得できないため、漫画を追加できません。");
      return;
    }

    const postData = {
      title: mangaTitle,
      publisher: mangaPublisher,
      author: mangaAuthor,
    };

    try {
      await db
        .collection("users")
        .doc(userId)
        .collection("mangaList")
        .add(postData);
      setMangaTitle("");
      setMangaPublisher("");
      setMangaAuthor("");
      showSuccessMessage("漫画を追加しました。");
    } catch (err) {
      showErrorMessage("漫画の追加に失敗しました。");
      console.log(err);
    }
  }, [
    mangaTitle,
    mangaPublisher,
    mangaAuthor,
    userId,
    showSuccessMessage,
    showErrorMessage,
  ]);

  return {
    mangaTitle,
    mangaPublisher,
    mangaAuthor,
    mangaTitleValidationMsg,
    mangaTitleIsValid,
    mangaPublisherValidationMsg,
    mangaPublisherIsValid,
    mangaAuthorValidationMsg,
    mangaAuthorIsValid,
    onChangeInputMangaTitle,
    onChangeInputMangaPublisher,
    onChangeInputMangaAuthor,
    postManga,
  };
};
