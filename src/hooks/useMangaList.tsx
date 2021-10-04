import { useState, useContext, useCallback } from "react";

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

  const [mangaList, setMangaList] = useState<Manga[]>([
    { id: "", title: "", publisher: "", author: "" },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();
  const { currentUser } = useContext(AuthContext);

  const userId: string | null = currentUser ? currentUser.uid : null;

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

  const deleteManga = useCallback(
    async (mangaId: string) => {
      if (!userId) {
        alert("ユーザーID取得できないため、削除できません。");
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
    currentUser,
  };
};
