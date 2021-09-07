import { memo, VFC } from "react";

import { PrimaryInput } from "../atoms/input/PrimaryInput";

type Props = {
  //   onChange: () => void;
};
export const InputSearch: VFC<Props> = memo((props) => {
  //   const { onChange } = props;
  // 検索処理を行う
  const onChangeSearch = () => {
    console.log("password");
  };
  return (
    <>
      <PrimaryInput
        type={"search"}
        placeholder={"search"}
        id={"search"}
        onChange={onChangeSearch}
      />
    </>
  );
});
