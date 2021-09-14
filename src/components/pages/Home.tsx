import { memo, VFC, useContext } from "react";
import { useHistory } from "react-router-dom";

import { useFlashMessage } from "../../hooks/useFlashMessage";
import { MainLayout } from "../templates/MainLayout";
import firebase from "../../firebase";
import { AuthContext } from "../../providers/Auth";

export const Home: VFC = memo(() => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();

  const onClickLogout = async () => {
    try {
      await firebase.auth().signOut();
      showSuccessMessage(
        `ログアウトしました さようなら${currentUser?.displayName}さん`
      );
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
