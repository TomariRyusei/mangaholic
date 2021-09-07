import { memo, VFC } from "react";

import { PrimaryInput } from "../atoms/input/PrimaryInput";

type Props = {
  //   onChange: () => void;
};
export const InputMail: VFC<Props> = memo((props) => {
  //   const { onChange } = props;
  // バリエーションを行う
  const onChangeEmailValidate = () => {
    console.log("email");
  };
  return (
    <>
      <PrimaryInput
        type={"email"}
        placeholder={"メールアドレス"}
        id={"email"}
        onChange={onChangeEmailValidate}
      />
    </>
  );
});
