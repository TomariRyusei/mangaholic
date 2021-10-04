import { memo, VFC } from "react";

import { PrimaryButton } from "./PrimaryButton";

type Props = {
  testid?: string;
  onClick: () => void;
};

export const AddButton: VFC<Props> = memo((props) => {
  const { testid, onClick } = props;
  return (
    <div className="my-5">
      <PrimaryButton onClick={onClick} testid={testid}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </PrimaryButton>
    </div>
  );
});
