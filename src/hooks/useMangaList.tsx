import { useState, useContext, useCallback } from "react";

import { db } from "./../firebase";
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

  return {
    mangaList,
    loading,
    fetchMangaList,
    currentUser,
  };
};
