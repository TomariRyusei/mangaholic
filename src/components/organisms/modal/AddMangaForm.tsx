import { VFC } from "react";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useAddManga } from "../../../hooks/useAddManga";

type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

export const AddMangaForm: VFC<Props> = (props) => {
  const { showModal, setShowModal } = props;
  const {
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
  } = useAddManga();

  const postMangaAndCloseModal = async () => {
    await postManga();
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-10 py-6 bg-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6">
              <PrimaryLabel testid={"loginLabel"}>漫画を追加</PrimaryLabel>
            </div>
            <div className="mb-6">
              <p className="text-xs text-red-600">{mangaTitleValidationMsg}</p>
              <PrimaryInput
                type={"text"}
                placeholder={"漫画タイトル"}
                id={"managaTitle"}
                value={mangaTitle}
                testid={"mangaTilteInput"}
                onChange={onChangeInputMangaTitle}
              />
            </div>
            <div className="mb-6">
              <p className="text-xs text-red-600">
                {mangaPublisherValidationMsg}
              </p>
              <PrimaryInput
                type={"text"}
                placeholder={"出版社"}
                id={"mangaPublisher"}
                value={mangaPublisher}
                testid={"mangaPublisherInput"}
                onChange={onChangeInputMangaPublisher}
              />
            </div>
            <div className="mb-6">
              <p className="text-xs text-red-600">{mangaAuthorValidationMsg}</p>
              <PrimaryInput
                type={"text"}
                placeholder={"作者"}
                id={"mangaAuthor"}
                value={mangaAuthor}
                testid={"mangaAuthorInput"}
                onChange={onChangeInputMangaAuthor}
              />
            </div>
            <div className="mt-6 mb-2">
              <PrimaryButton
                disabled={
                  !mangaTitleIsValid ||
                  !mangaPublisherIsValid ||
                  !mangaAuthorIsValid
                }
                testid={"addMangaButton"}
                onClick={postMangaAndCloseModal}
              >
                追加
              </PrimaryButton>
            </div>
            <button
              className="block text-gray-600 hover:underline text-xs mt-4"
              onClick={() => setShowModal(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
