import { memo, VFC } from "react";

type Props = {
  testid?: string;
  onClick: () => void;
};

export const EditButton: VFC<Props> = memo((props) => {
  const { testid, onClick } = props;
  return (
    <button
      onClick={onClick}
      data-testid={testid}
      className="bg-gray-500 hover:bg-opacity-80 text-white text-sm py-2 px-4 mr-2 shadow-lg transform hover:scale-105 transition-transform rounded max-h-10"
    >
      編集
    </button>
  );
});
