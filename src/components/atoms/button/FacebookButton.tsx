import { memo, ReactNode, VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  testid?: string;
  onClick: () => void;
};
export const FacebookButton: VFC<Props> = memo((props) => {
  const { children, disabled, testid, onClick } = props;
  return (
    <>
      {disabled ? (
        <button
          className="bg-facebookBlue text-white text-sm w-full py-2 px-4 mr-4 shadow-lg rounded opacity-50 cursor-not-allowed max-h-10"
          disabled={disabled}
          data-testid={testid}
        >
          {children}
        </button>
      ) : (
        <button
          className="bg-facebookBlue hover:bg-opacity-80 text-white text-sm w-full py-2 px-4 mr-4 shadow-lg transform hover:scale-105 transition-transform rounded max-h-10"
          data-testid={testid}
          onClick={onClick}
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className="text-white mr-3"
          />
          {children}
        </button>
      )}
    </>
  );
});
