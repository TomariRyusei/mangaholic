import { useState, useContext, useCallback, ChangeEvent } from "react";

import { db } from "./../firebase";
import { AuthContext } from "../providers/Auth";
import { useFlashMessage } from "./useFlashMessage";

export const useEditManga = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editedMangaTitle, setEditedMangaTitle] = useState("");
  const [editedMangaPublisher, setEditedMangaPublisher] = useState("");
  const [editedMangaAuthor, setEditedMangaAuthor] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();

  // 編集時にオブジェクトを生成する際使用する配列の型(必ず要素は2つになる)
  type editArray<T> = [T, T];

  const userId: string | null = currentUser ? currentUser.uid : null;

  // 編集された漫画タイトルをステートにセット
  const onChangeMangaTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedMangaTitle(e.target.value);
  };
  // 編集された漫画タイトルをステートにセット
  const onChangeMangaPublisher = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedMangaPublisher(e.target.value);
  };
  // 編集された漫画タイトルをステートにセット
  const onChangeMangaAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedMangaAuthor(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // 漫画情報編集
  const editManga = useCallback(
    async (mangaId: string) => {
      if (!userId) {
        alert("ユーザーID取得できないため、編集できません。");
        return;
      }

      const mangaData = {
        title: editedMangaTitle,
        publisher: editedMangaPublisher,
        author: editedMangaAuthor,
      };

      // 変更がある項目だけ更新したい
      const editedData: { [key: string]: string } = Object.entries(mangaData)
        .filter((data: editArray<string>) => {
          return data[1] !== "";
        })
        .reduce((obj: { [key: string]: string }, data: editArray<string>) => {
          obj[data[0]] = data[1];
          return obj;
        }, {});

      try {
        await db
          .collection("users")
          .doc(userId)
          .collection("mangaList")
          .doc(mangaId)
          .set(editedData, { merge: true });
        showSuccessMessage("漫画情報を編集しました。");
        setEditedMangaTitle("");
        setEditedMangaPublisher("");
        setEditedMangaAuthor("");
        setIsEditMode(!isEditMode);
      } catch (err) {
        showErrorMessage("漫画情報の編集に失敗しました。");
        console.log(err);
      }
    },
    [
      userId,
      showSuccessMessage,
      showErrorMessage,
      editedMangaAuthor,
      editedMangaPublisher,
      editedMangaTitle,
      isEditMode,
    ]
  );

  return {
    onChangeMangaTitle,
    onChangeMangaPublisher,
    onChangeMangaAuthor,
    isEditMode,
    toggleEditMode,
    editManga,
  };
};
