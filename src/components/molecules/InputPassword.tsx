import { ChangeEvent, memo, VFC } from "react";

import { PrimaryInput } from "../atoms/input/PrimaryInput";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const InputPassword: VFC<Props> = memo((props) => {
  const { onChange } = props;

  return (
    <>
      <PrimaryInput
        type={"password"}
        placeholder={"パスワード"}
        id={"password"}
        onChange={onChange}
      />
    </>
  );
});
