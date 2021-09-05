import { memo, VFC } from "react";

import { FromLabel } from "../../atoms/label/FromLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";

type Props = {
  onChange: () => void;
};
export const EmailInput: VFC<Props> = memo((props) => {
  const { onChange } = props;
  return (
    <>
      <FromLabel forLabel={"email"}>メールアドレス</FromLabel>
      <PrimaryInput
        type={"email"}
        placeholder={"メールアドレス"}
        id={"email"}
        onChange={onChange}
      />
    </>
  );
});
