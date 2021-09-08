import { ChangeEvent, memo, VFC } from "react";

import { PrimaryInput } from "../atoms/input/PrimaryInput";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const InputUserName: VFC<Props> = memo((props) => {
  const { onChange } = props;

  return (
    <>
      <PrimaryInput
        type={"text"}
        placeholder={"ユーザー名"}
        id={"usename"}
        onChange={onChange}
      />
    </>
  );
});
