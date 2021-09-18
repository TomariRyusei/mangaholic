import { memo, ReactNode, VFC } from "react";

type Props = {
  testid?: string;
  children: ReactNode;
};
export const PrimaryLabel: VFC<Props> = memo((props) => {
  const { testid, children } = props;
  return (
    <label className="block text-gray-600 text-xl my-4" data-testid={testid}>
      {children}
    </label>
  );
});
