import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
export const SecondaryButton: VFC<Props> = memo((props) => {
  const { children, disabled, onClick } = props;
  if (disabled) {
    return (
      <button
        className="bg-transparent hover:bg-gray-600 text-gray-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-gray-500 hover:border-transparent rounded opacity-50 cursor-not-allowed"
        disabled={disabled}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="bg-transparent hover:bg-gray-600 text-gray-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-gray-500 hover:border-transparent rounded"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
});
