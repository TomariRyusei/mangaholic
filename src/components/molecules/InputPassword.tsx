import { memo, VFC } from "react";

import { PrimaryInput } from "../atoms/input/PrimaryInput";

type Props = {
  //   onChange: () => void;
};
export const InputPassword: VFC<Props> = memo((props) => {
  //   const { onChange } = props;
  // バリエーション処理を行う
  const onChangePasswordValidate = () => {
    console.log("password");
  };
  return (
    <>
      <PrimaryInput
        type={"password"}
        placeholder={"パスワード"}
        id={"password"}
        onChange={onChangePasswordValidate}
      />
    </>
  );
});
