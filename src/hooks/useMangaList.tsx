import { useState, useContext, useCallback, ChangeEvent } from "react";

import { db } from "./../firebase";
import { useFlashMessage } from "../hooks/useFlashMessage";
import { AuthContext } from "../providers/Auth";

export const useMangaList = () => {
  type Manga = {
    id: string;
    title: string;
    publisher: string;
    author: string;
  };

  // 編集時にオブジェクトを生成する際使用する配列の型(必ず要素は2つになる)
  type editArray<T> = [T, T];

  const [mangaList, setMangaList] = useState<Manga[]>([
    { id: "", title: "", publisher: "", author: "" },
  ]);
  const [editedMangaTitle, setEditedMangaTitle] = useState("");
  const [editedMangaPublisher, setEditedMangaPublisher] = useState("");
  const [editedMangaAuthor, setEditedMangaAuthor] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();
  const { currentUser } = useContext(AuthContext);

  const userId: string | null = currentUser ? currentUser.uid : null;

  // 漫画リストの取得
  const fetchMangaList = useCallback(() => {
    if (!userId) {
      alert("ユーザーID取得できないため、一覧を表示できません。");
      return;
    }

    setLoading(true);

    const unsubscribed = db
      .collection("users")
      .doc(userId)
      .collection("mangaList")
      .onSnapshot((snapshot) => {
        setMangaList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            publisher: doc.data().publisher,
            author: doc.data().author,
          }))
        );
        setLoading(false);
      });

    return unsubscribed;
  }, [userId]);

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
    ]
  );

  // 漫画情報の削除
  const deleteManga = useCallback(
    async (mangaId: string) => {
      if (!userId) {
        alert("ユーザーID取得できないため、削除できません。");
        return;
      }

      if (!window.confirm("漫画を削除します。よろしいですか？")) {
        return;
      }

      try {
        await db
          .collection("users")
          .doc(userId)
          .collection("mangaList")
          .doc(mangaId)
          .delete();

        showSuccessMessage("漫画を削除しました。");
      } catch (err) {
        showErrorMessage("漫画の削除に失敗しました。");
        console.log(err);
      }
    },
    [userId, showSuccessMessage, showErrorMessage]
  );

  return {
    mangaList,
    loading,
    fetchMangaList,
    deleteManga,
    onChangeMangaTitle,
    onChangeMangaPublisher,
    onChangeMangaAuthor,
    editManga,
    currentUser,
  };
};
