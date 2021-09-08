import { ChangeEvent, memo, VFC } from "react";

import { PrimaryInput } from "../atoms/input/PrimaryInput";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const InputMail: VFC<Props> = memo((props) => {
  const { onChange } = props;
  // バリエーションを行う
  return (
    <>
      <PrimaryInput
        type={"email"}
        placeholder={"メールアドレス"}
        id={"email"}
        onChange={onChange}
      />
    </>
  );
});
