import { memo, ReactNode, VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
export const GoogleButton: VFC<Props> = memo((props) => {
  const { children, disabled, onClick } = props;
  if (disabled) {
    return (
      <button
        className="bg-googleRed text-white text-sm w-full py-2 px-4 mr-4 rounded opacity-50 cursor-not-allowed max-h-10"
        disabled={disabled}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="bg-googleRed hover:bg-opacity-80 text-white text-sm w-full py-2 px-4 mr-4 transform hover:scale-105 transition-transform rounded max-h-10"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={["fab", "google"]} className="text-white mr-3" />
        {children}
      </button>
    );
  }
});
