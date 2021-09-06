import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};
export const PrimaryLabel: VFC<Props> = memo((props) => {
  const { children } = props;
  return <label className="block text-gray-600 text-xl my-4">{children}</label>;
});
