import { memo, VFC } from "react";

import { FromLabel } from "../../atoms/label/FromLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";

type Props = {
  onChange: () => void;
};
export const PasswordInput: VFC<Props> = memo((props) => {
  const { onChange } = props;
  return (
    <>
      <FromLabel forLabel={"password"}>パスワード</FromLabel>
      <PrimaryInput
        type={"password"}
        placeholder={"パスワード"}
        id={"password"}
        onChange={onChange}
      />
    </>
  );
});
