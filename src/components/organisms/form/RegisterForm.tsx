import { ChangeEvent, useEffect, useState, memo, VFC } from "react";
import { useHistory, Link } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { InputMail } from "../../molecules/InputMail";
import { InputPassword } from "../../molecules/InputPassword";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { TwitterButton } from "../../atoms/button/TwitterButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";
import firebase from "../../firebase";
import { useAuth } from "../../../hooks/useAuth";

export const RegisterForm: VFC = memo((props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  const { authErrorHandling } = useAuth();

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
      alert("アカウント作成に成功しました");
      history.push("/");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      alert(msg);
    }
  };
  const onClickTwitterRegister = () => {
    alert("twitter");
  };
  const onClickGoogleRegister = async () => {
    try {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(googleAuthProvider);
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      alert(msg);
    }
  };

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-8 pb-6 pt-4 my-6">
      <div className="mb-6">
        <PrimaryLabel>アカウント作成</PrimaryLabel>
      </div>
      <div className="mb-6">
        <InputMail onChange={onChangeInputMail} />
      </div>
      <div className="mb-6">
        <InputPassword onChange={onChangePassword} />
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
        <TwitterButton onClick={onClickTwitterRegister}>
          Twitterアカウントで登録
        </TwitterButton>
      </div>
      <div className="mb-6">
        <GoogleButton onClick={onClickGoogleRegister}>
          Googleアカウントで登録
        </GoogleButton>
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
