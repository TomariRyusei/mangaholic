import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  forLabel?: string;
};
export const PrimaryLabel: VFC<Props> = memo((props) => {
  const { children, forLabel } = props;
  return (
    <label
      className="block text-gray-700 text-2xl font-extrabold my-4"
      htmlFor={forLabel}
    >
      {children}
    </label>
  );
});
