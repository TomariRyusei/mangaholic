import { memo, VFC } from "react";

type Props = {
  testid?: string;
  onClick: () => void;
};

export const CancelButton: VFC<Props> = memo((props) => {
  const { testid, onClick } = props;
  return (
    <button
      onClick={onClick}
      data-testid={testid}
      className="bg-yellow-500 hover:bg-opacity-80 text-white text-sm py-2 px-4 mr-2 shadow-lg transform hover:scale-105 transition-transform rounded max-h-10"
    >
      キャンセル
    </button>
  );
});
