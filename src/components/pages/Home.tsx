import { memo, VFC } from "react";

import { MainLayout } from "../templates/MainLayout";
import { auth } from "../firebase";

export const Home: VFC = memo(() => {
  const onClickLogout = async () => {
    await auth.signOut();
    alert("ログアウトしました");
  };
  return (
    <MainLayout>
      <p>HOMEページです</p>
      <button onClick={onClickLogout}>ログアウト</button>
    </MainLayout>
  );
});
