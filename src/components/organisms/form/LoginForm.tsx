import { ChangeEvent, useEffect, useState, memo, VFC } from "react";
import { useHistory, Link } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { InputMail } from "../../molecules/InputMail";
import { InputPassword } from "../../molecules/InputPassword";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { TwitterButton } from "../../atoms/button/TwitterButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";
import { auth } from "../../firebase";

type Props = {
  //   onChange: () => void;
};

export const LoginForm: VFC<Props> = memo((props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && history.push("/");
    });
  }, [history]);

  const onChangeInputMail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("ログインに成功しました");
      history.push("/");
    } catch (err: any) {
      alert(err);
    }
  };
  const onClickTwitterLogin = () => {
    alert("twitter");
  };
  const onClickGoogleLogin = () => {
    alert("goolge");
  };

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-8 pb-6 pt-4 my-6">
      <div className="mb-6">
        <PrimaryLabel>ログイン</PrimaryLabel>
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
          onClick={onClickLogin}
        >
          ログイン
        </PrimaryButton>
      </div>
      <div className="mb-4 text-center">
        <span className="text-lg font-light text-gray-600">or</span>
      </div>
      <div className="mb-6">
        <TwitterButton onClick={onClickTwitterLogin}>
          Twitterアカウントでログイン
        </TwitterButton>
      </div>
      <div className="mb-6">
        <GoogleButton onClick={onClickGoogleLogin}>
          Googleアカウントでログイン
        </GoogleButton>
      </div>
      <Link
        to="/register"
        className="block text-gray-600 hover:underline text-xs my-1"
      >
        アカウント作成はこちら
      </Link>
    </div>
  );
});
