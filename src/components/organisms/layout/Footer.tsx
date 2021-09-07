import { memo, VFC } from "react";

import { CopyRight } from "../../atoms/CopyRight";
import { HorizonLine } from "../../atoms/HorizonLine";
type Props = {
  //   onChange: () => void;
};
export const Footer: VFC<Props> = memo((props) => {
  return (
    <>
      <HorizonLine />
      <CopyRight />
    </>
  );
});
