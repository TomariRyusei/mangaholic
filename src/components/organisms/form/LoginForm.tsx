import { ChangeEvent, useEffect, useState, useContext, memo, VFC } from "react";
import { useHistory, Link } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { FacebookButton } from "../../atoms/button/FacebookButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";
import firebase from "../../../firebase";
import { useAuth } from "../../../hooks/useAuth";
import { useFlashMessage } from "../../../hooks/useFlashMessage";
import { AuthContext } from "../../../providers/Auth";

export const LoginForm: VFC = memo((props) => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { authErrorHandling } = useAuth();
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();

  useEffect(() => {
    console.log(currentUser?.displayName);
    currentUser && history.push("/");
  }, [history, currentUser]);

  const onChangeInputMail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      showSuccessMessage("ログインしました");
      history.push("/");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      showErrorMessage(msg);
      console.log(err);
    }
  };
  const onClickFacebookLogin = () => {
    alert("Facebook");
  };

  const onClickGoogleLogin = async () => {
    try {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(googleAuthProvider);
      showSuccessMessage("ログインしました");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      showErrorMessage(msg);
      console.log(err);
    }
  };

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-8 pb-6 pt-4 my-6">
      <div className="mb-6">
        <PrimaryLabel>ログイン</PrimaryLabel>
      </div>
      <div className="mb-6">
        <PrimaryInput
          type={"email"}
          placeholder={"メールアドレス"}
          id={"email"}
          onChange={onChangeInputMail}
        />
      </div>
      <div className="mb-6">
        <PrimaryInput
          type={"password"}
          placeholder={"パスワード"}
          id={"password"}
          onChange={onChangePassword}
        />
      </div>
      <div className="mt-6 mb-2">
        <PrimaryButton
          disabled={false}
          colorName={"navy"}
          onClick={onClickLogin}
        >
          ログイン
        </PrimaryButton>
      </div>
      <div className="mb-4 text-center">
        <span className="text-lg font-light text-gray-600">or</span>
      </div>
      <div className="mb-6">
        <GoogleButton onClick={onClickGoogleLogin}>
          Googleアカウントでログイン
        </GoogleButton>
      </div>
      <div className="mb-6">
        <FacebookButton onClick={onClickFacebookLogin}>
          Facebookアカウントでログイン
        </FacebookButton>
      </div>
      <Link
        to="/register"
        className="block text-gray-600 hover:underline text-xs my-2"
      >
        アカウント作成はこちら
      </Link>
      <Link
        to="/forgot_password"
        className="block text-gray-600 hover:underline text-xs my-2"
      >
        パスワードをお忘れの方はこちら
      </Link>
    </div>
  );
});
