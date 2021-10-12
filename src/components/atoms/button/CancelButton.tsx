import { memo, VFC } from "react";

type Props = {
  testid?: string;
  onClick: () => void;
};

export const CancelButton: VFC<Props> = memo((props) => {
  const { testid, onClick } = props;
  return (
    <button onClick={onClick} data-testid={testid}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    </button>
  );
});
