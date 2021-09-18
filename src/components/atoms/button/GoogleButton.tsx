import { memo, ReactNode, VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  testid?: string;
  onClick: () => void;
};
export const GoogleButton: VFC<Props> = memo((props) => {
  const { children, disabled, testid, onClick } = props;
  return (
    <>
      {disabled ? (
        <button
          className="bg-googleRed text-white text-sm w-full py-2 px-4 mr-4 rounded opacity-50 cursor-not-allowed max-h-10"
          disabled={disabled}
          data-testid={testid}
        >
          {children}
        </button>
      ) : (
        <button
          className="bg-googleRed hover:bg-opacity-80 text-white text-sm w-full py-2 px-4 mr-4 transform hover:scale-105 transition-transform rounded max-h-10"
          data-testid={testid}
          onClick={onClick}
        >
          <FontAwesomeIcon
            icon={["fab", "google"]}
            className="text-white mr-3"
          />
          {children}
        </button>
      )}
    </>
  );
});
