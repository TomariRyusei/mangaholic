import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  forLabel: string;
};
export const FromLabel: VFC<Props> = memo((props) => {
  const { children, forLabel } = props;
  return (
    <label
      className="block text-gray-700 text-sm font-bold mt-2"
      htmlFor={forLabel}
    >
      {children}
    </label>
  );
});
