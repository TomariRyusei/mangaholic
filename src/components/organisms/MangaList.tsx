import { VFC, useState, useEffect } from "react";

import { useMangaList } from "../../hooks/useMangaList";
import { PrimaryLabel } from "../atoms/label/PrimaryLabel";
import { Spinner } from "../atoms/spinner/Spinner";
import { AddButton } from "../atoms/button/AddButton";
import { AddMangaForm } from "../organisms/modal/AddMangaForm";
import { DeleteButton } from "../atoms/button/DeleteButton";
import { EditButton } from "../atoms/button/EditButton";

export const MangaList: VFC = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    mangaList,
    loading,
    fetchMangaList,
    deleteManga,
    onChangeMangaTitle,
    onChangeMangaPublisher,
    onChangeMangaAuthor,
    editManga,
    currentUser,
  } = useMangaList();

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
        <div className="min-w-full">
          <PrimaryLabel>
            {currentUser?.displayName ? currentUser.displayName : "No Name"}
            さんの漫画リスト
          </PrimaryLabel>
          <AddButton
            onClick={() => setShowModal(true)}
            testid="addMangaButton"
          />
          <div className="-my-2 py-5 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
              <div className="flex justify-between">
                <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                  <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                        <svg
                          width="18"
                          height="18"
                          className="w-4 lg:w-auto"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                            stroke="#455A64"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.9993 16.9993L13.1328 13.1328"
                            stroke="#455A64"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500"
                      placeholder="Search"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="align-middle inline-block min-w-full shadow-lg overflow-hidden bg-white shadow-dashboard px-8 pt-3 pb-10 rounded-bl-lg rounded-br-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-navy tracking-wider">
                      漫画タイトル
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-navy tracking-wider">
                      作者
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-navy tracking-wider">
                      出版社
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-navy tracking-wider">
                      巻数
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-navy tracking-wider">
                      編集
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-navy tracking-wider">
                      削除
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {mangaList.map((manga) => {
                    return (
                      <tr key={manga.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-gray-700">
                          <input
                            type="text"
                            defaultValue={manga.title}
                            className="focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="漫画タイトル"
                            onChange={onChangeMangaTitle}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-700 border-gray-500 text-sm leading-5">
                          <input
                            type="text"
                            defaultValue={manga.author}
                            className="focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="作者"
                            onChange={onChangeMangaAuthor}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-700 border-gray-500 text-sm leading-5">
                          <input
                            type="text"
                            defaultValue={manga.publisher}
                            className="focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="出版社"
                            onChange={onChangeMangaPublisher}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-700 border-gray-500 text-sm leading-5">
                          <input
                            type="text"
                            defaultValue="24"
                            className="focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="巻数"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-700 text-sm leading-5">
                          <EditButton
                            testid="editMangaButton"
                            onClick={async () => await editManga(manga.id)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5">
                          <DeleteButton
                            testid="deleteMangaButton"
                            onClick={async () => await deleteManga(manga.id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <AddMangaForm showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
};
