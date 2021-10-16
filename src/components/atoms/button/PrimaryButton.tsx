import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  colorName?: string;
  colorDepth?: string;
  testid?: string;
  onClick: () => void;
};
export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled, testid, onClick } = props;
  return (
    <>
      {disabled ? (
        <button
          className={
            "bg-navy text-white text-sm w-full py-2 px-4 mr-4 shadow-lg rounded opacity-50 cursor-not-allowed max-h-10"
          }
          disabled={disabled}
          data-testid={testid}
        >
          {children}
        </button>
      ) : (
        <button
          className={
            "bg-navy hover:bg-opacity-80 text-white text-sm w-full py-2 px-4 mr-4 shadow-lg transform hover:scale-105 transition-transform rounded max-h-10"
          }
          data-testid={testid}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
});
