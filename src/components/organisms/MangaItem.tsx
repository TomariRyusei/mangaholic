import { VFC } from "react";

import { DeleteButton } from "../atoms/button/DeleteButton";
import { useMangaList } from "../../hooks/useMangaList";

type Props = {
  id: string;
  title: string;
  publisher: string;
  author: string;
};
export const MangaItem: VFC<Props> = (props) => {
  const { id, title, publisher, author } = props;
  const { deleteManga } = useMangaList();

  return (
    <h3 className="text-gray-600 text-lg">
      {title} {publisher} {author}
      <DeleteButton
        testid="deleteMangaButton"
        onClick={async () => await deleteManga(id)}
      />
    </h3>
  );
};
