import { memo, VFC } from "react";
import { useHistory } from "react-router-dom";

import { useFlashMessage } from "../../hooks/useFlashMessage";
import { MainLayout } from "../templates/MainLayout";
import firebase from "../firebase";

export const Home: VFC = memo(() => {
  const history = useHistory();
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();

  const onClickLogout = async () => {
    try {
      await firebase.auth().signOut();
      showSuccessMessage("ログアウトしました");
      history.push("/login");
    } catch (err: any) {
      console.log(err);
      showErrorMessage("ログアウトに失敗しました");
    }
  };
  return (
    <MainLayout>
      <p>HOMEページです</p>
      <button onClick={onClickLogout}>ログアウト</button>
    </MainLayout>
  );
});
