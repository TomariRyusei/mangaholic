import { useState, useContext, useCallback, ChangeEvent } from "react";

import { db } from "./../firebase";
import { AuthContext } from "../providers/Auth";
import { useFlashMessage } from "./useFlashMessage";

export const useAddManga = () => {
  const [mangaTitle, setMangaTitle] = useState<string>("");
  const [mangaPublisher, setMangaPublisher] = useState<string>("");
  const [mangaAuthor, setMangaAuthor] = useState<string>("");
  const { currentUser } = useContext(AuthContext);
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();

  const userId: string | null = currentUser ? currentUser.uid : null;

  const onChangeInputMangaTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setMangaTitle(e.target.value);
  };

  const onChangeInputMangaPublisher = (e: ChangeEvent<HTMLInputElement>) => {
    setMangaPublisher(e.target.value);
  };

  const onChangeInputMangaAuthor = (e: ChangeEvent<HTMLInputElement>) => {
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
    onChangeInputMangaTitle,
    onChangeInputMangaPublisher,
    onChangeInputMangaAuthor,
    postManga,
  };
};
