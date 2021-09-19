import { VFC, useContext } from "react";

import { MainLayout } from "../templates/MainLayout";
import { AuthContext } from "../../providers/Auth";
import { useAuth } from "../../hooks/useAuth";

export const Home: VFC = () => {
  const { currentUser } = useContext(AuthContext);
  const { logout } = useAuth();

  const onClickLogout = async () => {
    await logout();
  };

  return (
    <MainLayout title={"Home - Mangaholic"}>
      <p>HOMEページです</p>
      {currentUser && <button onClick={onClickLogout}>ログアウト</button>}
    </MainLayout>
  );
};
