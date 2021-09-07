import { memo, VFC } from "react";

import { PrimaryInput } from "../atoms/input/PrimaryInput";

type Props = {
  //   onChange: () => void;
};
export const InputUserName: VFC<Props> = memo((props) => {
  //   const { onChange } = props;
  // バリエーション処理を行う
  const onChangeUserNameValidate = () => {
    console.log("username");
  };
  return (
    <>
      <PrimaryInput
        type={"text"}
        placeholder={"ユーザー名"}
        id={"usename"}
        onChange={onChangeUserNameValidate}
      />
    </>
  );
});
