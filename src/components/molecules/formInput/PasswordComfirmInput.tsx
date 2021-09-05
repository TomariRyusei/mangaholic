import { memo, VFC } from "react";

import { FromLabel } from "../../atoms/label/FromLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";

type Props = {
  onChange: () => void;
};
export const PasswordComfirmInput: VFC<Props> = memo((props) => {
  const { onChange } = props;
  return (
    <>
      <FromLabel forLabel={"password_comfirm"}>パスワード(確認)</FromLabel>
      <PrimaryInput
        type={"password"}
        placeholder={"パスワード(確認)"}
        id={"password_comfirm"}
        onChange={onChange}
      />
    </>
  );
});
