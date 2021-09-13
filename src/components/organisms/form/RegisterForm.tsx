import { ChangeEvent, useEffect, useState, memo, VFC } from "react";
import { useHistory, Link } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { FacebookButton } from "../../atoms/button/FacebookButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";
import firebase from "../../firebase";
import { useAuth } from "../../../hooks/useAuth";
import { useFlashMessage } from "../../../hooks/useFlashMessage";

export const RegisterForm: VFC = memo((props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  const { authErrorHandling } = useAuth();
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user && history.push("/");
    });
  }, [history]);

  const onChangeInputMail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onClickRegister = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      showSuccessMessage("アカウントを作成しました");
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
  const onClickGoogleRegister = async () => {
    try {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(googleAuthProvider);
      showSuccessMessage("アカウントを作成しました");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      showErrorMessage(msg);
      alert(msg);
    }
  };

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-8 pb-6 pt-4 my-6">
      <div className="mb-6">
        <PrimaryLabel>アカウント作成</PrimaryLabel>
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
          onClick={onClickRegister}
        >
          アカウント作成
        </PrimaryButton>
      </div>
      <div className="mb-4 text-center">
        <span className="text-lg font-light text-gray-600">or</span>
      </div>
      <div className="mb-6">
        <GoogleButton onClick={onClickGoogleRegister}>
          Googleアカウントで登録
        </GoogleButton>
      </div>
      <div className="mb-6">
        <FacebookButton onClick={onClickFacebookLogin}>
          Facebookアカウントで登録
        </FacebookButton>
      </div>
      <Link
        to="/login"
        className="block text-gray-600 hover:underline text-xs my-1"
      >
        アカウントをお持ちの方はこちら
      </Link>
    </div>
  );
});
