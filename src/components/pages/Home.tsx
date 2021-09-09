import { memo, VFC } from "react";
import { useHistory } from "react-router-dom";

import { MainLayout } from "../templates/MainLayout";
import firebase from "../firebase";

export const Home: VFC = memo(() => {
  const history = useHistory();

  const onClickLogout = async () => {
    await firebase.auth().signOut();
    alert("ログアウトしました");
    history.push("/login");
  };
  return (
    <MainLayout>
      <p>HOMEページです</p>
      <button onClick={onClickLogout}>ログアウト</button>
    </MainLayout>
  );
});
