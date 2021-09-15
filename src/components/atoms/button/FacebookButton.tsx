import { memo, ReactNode, VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
export const FacebookButton: VFC<Props> = memo((props) => {
  const { children, disabled, onClick } = props;
  return (
    <>
      {disabled ? (
        <button
          className="bg-facebookBlue text-white text-sm w-full py-2 px-4 mr-4 rounded opacity-50 cursor-not-allowed max-h-10"
          disabled={disabled}
        >
          {children}
        </button>
      ) : (
        <button
          className="bg-facebookBlue hover:bg-opacity-80 text-white text-sm w-full py-2 px-4 mr-4 transform hover:scale-105 transition-transform rounded max-h-10"
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
