import { VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { FacebookButton } from "../../atoms/button/FacebookButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";
import { useAuth } from "../../../hooks/useAuth";

export const RegisterForm: VFC = () => {
  const {
    username,
    email,
    password,
    onChangeInputUsername,
    onChangeInputMail,
    onChangePassword,
    emailValidationMsg,
    emailIsValid,
    passwordValidationMsg,
    passwordIsValid,
    register,
    googleLogin,
  } = useAuth();

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-8 pb-6 pt-4 my-6">
      <div className="mb-6">
        <PrimaryLabel>アカウント作成</PrimaryLabel>
      </div>
      <div className="mb-6">
        <PrimaryInput
          type={"text"}
          placeholder={"ユーザー名"}
          id={"username"}
          value={username}
          onChange={onChangeInputUsername}
        />
      </div>
      <div className="mb-6">
        <p className="text-xs text-red-600">
          {emailValidationMsg ? emailValidationMsg : "必須"}
        </p>
        <PrimaryInput
          type={"email"}
          placeholder={"メールアドレス"}
          id={"email"}
          value={email}
          onChange={onChangeInputMail}
        />
      </div>
      <div className="mb-6">
        <p className="text-xs text-red-600">
          {passwordValidationMsg ? passwordValidationMsg : "必須"}
        </p>
        <PrimaryInput
          type={"password"}
          placeholder={"パスワード"}
          id={"password"}
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div className="mt-6 mb-2">
        <PrimaryButton
          disabled={!emailIsValid || !passwordIsValid}
          onClick={async () => await register(email, password)}
        >
          アカウント作成
        </PrimaryButton>
      </div>
      <div className="mb-4 text-center">
        <span className="text-lg font-light text-gray-600">or</span>
      </div>
      <div className="mb-6">
        <GoogleButton onClick={async () => await googleLogin()}>
          Googleアカウントでログイン
        </GoogleButton>
      </div>
      <div className="mb-6">
        <FacebookButton onClick={() => alert("Facebook")}>
          Facebookアカウントでログイン
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
};
