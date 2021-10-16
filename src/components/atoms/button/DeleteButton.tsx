import { memo, VFC } from "react";

type Props = {
  testid?: string;
  onClick: () => void;
};

export const DeleteButton: VFC<Props> = memo((props) => {
  const { testid, onClick } = props;
  return (
    <button
      onClick={onClick}
      data-testid={testid}
      className="bg-red-600 hover:bg-opacity-80 text-white text-sm py-2 px-4 shadow-lg transform hover:scale-105 transition-transform rounded max-h-10"
    >
      削除
    </button>
  );
});
