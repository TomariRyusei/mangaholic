import { VFC } from "react";

import { CopyRight } from "../../atoms/CopyRight";
import { HorizonLine } from "../../atoms/HorizonLine";
export const Footer: VFC = () => {
  return (
    <>
      <HorizonLine />
      <CopyRight />
    </>
  );
};
