import { VFC, useState, useEffect } from "react";

import { useMangaList } from "../../hooks/useMangaList";
import { PrimaryLabel } from "../atoms/label/PrimaryLabel";
import { Spinner } from "../atoms/spinner/Spinner";
import { AddButton } from "../atoms/button/AddButton";
import { AddMangaForm } from "../organisms/modal/AddMangaForm";

export const MangaList: VFC = () => {
  const [showModal, setShowModal] = useState(false);
  const { mangaList, loading, fetchMangaList, currentUser } = useMangaList();

  useEffect(() => {
    const unsubscribed = fetchMangaList();

    if (unsubscribed) {
      return () => unsubscribed();
    }
  }, [fetchMangaList]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <PrimaryLabel testid={"mangaListLabel"}>
            {currentUser?.displayName}さんの Manga List
          </PrimaryLabel>
          <AddButton onClick={() => setShowModal(true)} />
          {mangaList.map((manga) => (
            <h3 className="text-gray-600 text-lg" key={manga.id}>
              {manga.title} {manga.author} {manga.publisher}
            </h3>
          ))}
          <AddMangaForm showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
};
