import { VFC } from "react";

import { useMangaList } from "../../hooks/useMangaList";
import { useEditManga } from "../../hooks/useEditManga";
import { DeleteButton } from "../atoms/button/DeleteButton";
import { EditButton } from "../atoms/button/EditButton";
import { SaveButton } from "../atoms/button/SaveButton";
import { CancelButton } from "../atoms/button/CancelButton";

type Manga = {
  id: string;
  title: string;
  publisher: string;
  author: string;
};

type Props = {
  manga: Manga;
  editModeCount: number;
  setEditModeCount: React.Dispatch<React.SetStateAction<number>>;
};

export const MangaListItem: VFC<Props> = (props) => {
  const { manga, editModeCount, setEditModeCount } = props;

  const { deleteManga } = useMangaList();

  const {
    onChangeMangaTitle,
    onChangeMangaPublisher,
    onChangeMangaAuthor,
    isEditMode,
    setIsEditMode,
    editManga,
  } = useEditManga();

  return (
    <tr>
      <td className="px-2 py-4 whitespace-no-wrap text-center border-b border-gray-500 text-sm leading-5 text-gray-700">
        {isEditMode ? (
          <input
            type="text"
            defaultValue={manga.title}
            className="border-b border-green-500 py-1 text-center rounded-sm focus:outline-none"
            placeholder="漫画タイトル"
            onChange={onChangeMangaTitle}
          />
        ) : (
          manga.title
        )}
      </td>
      <td className="px-2 py-4 whitespace-no-wrap text-center border-b text-gray-700 border-gray-500 text-sm leading-5">
        {isEditMode ? (
          <input
            type="text"
            defaultValue={manga.author}
            className="border-b border-green-500 py-1 text-center rounded-sm focus:outline-none"
            placeholder="作者"
            onChange={onChangeMangaAuthor}
          />
        ) : (
          manga.author
        )}
      </td>
      <td className="px-2 py-4 whitespace-no-wrap text-center border-b text-gray-700 border-gray-500 text-sm leading-5">
        {isEditMode ? (
          <input
            type="text"
            defaultValue={manga.publisher}
            className="border-b border-green-500 py-1 text-center rounded-sm focus:outline-none"
            placeholder="出版社"
            onChange={onChangeMangaPublisher}
          />
        ) : (
          manga.publisher
        )}
      </td>
      <td className="px-2 py-4 whitespace-no-wrap text-center border-b border-gray-500 text-gray-700 text-sm leading-5">
        {isEditMode ? (
          <SaveButton
            testid="saveEditMangaButton"
            onClick={async () => {
              await editManga(manga.id);
              setEditModeCount(editModeCount - 1);
            }}
          />
        ) : (
          <EditButton
            testid="editMangaButton"
            onClick={() => {
              setIsEditMode(true);
              setEditModeCount(editModeCount + 1);
            }}
          />
        )}
      </td>
      {isEditMode ? (
        <td className="px-2 py-4 whitespace-no-wrap text-center  border-b border-gray-500 text-sm leading-5">
          <CancelButton
            testid="cancelMangaButton"
            onClick={() => {
              setIsEditMode(false);
              setEditModeCount(editModeCount - 1);
            }}
          />
        </td>
      ) : null}
      <td className="px-2 py-4 whitespace-no-wrap text-center  border-b border-gray-500 text-sm leading-5">
        <DeleteButton
          testid="deleteMangaButton"
          onClick={async () => await deleteManga(manga.id)}
        />
      </td>
    </tr>
  );
};
