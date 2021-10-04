import { useState, useContext, useCallback, ChangeEvent } from "react";

import { db } from "./../firebase";
import { AuthContext } from "../providers/Auth";
import { useFlashMessage } from "./useFlashMessage";
import { useFormValidation } from "./useFormValidation";

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

  const userId: string | null = currentUser ? currentUser.uid : null;

  const onChangeInputMangaTitle = (e: ChangeEvent<HTMLInputElement>) => {
    mangaTitleValidation(e.target.value);
    setMangaTitle(e.target.value);
  };

  const onChangeInputMangaPublisher = (e: ChangeEvent<HTMLInputElement>) => {
    mangaPublisherValidation(e.target.value);
    setMangaPublisher(e.target.value);
  };

  const onChangeInputMangaAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    mangaAuthorValidation(e.target.value);
    setMangaAuthor(e.target.value);
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
