import { VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { FacebookButton } from "../../atoms/button/FacebookButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";
import { useAuth } from "../../../hooks/useAuth";

export const LoginForm: VFC = () => {
  const {
    email,
    password,
    onChangeInputMail,
    onChangePassword,
    emailValidationMsg,
    emailIsValid,
    passwordValidationMsg,
    passwordIsValid,
    login,
    googleLogin,
  } = useAuth();

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-8 pb-6 pt-4 my-6">
      <div className="mb-6">
        <PrimaryLabel testid={"loginLabel"}>ログイン</PrimaryLabel>
      </div>
      <div className="mb-6">
        <p className="text-xs text-red-600">{emailValidationMsg}</p>
        <PrimaryInput
          type={"email"}
          placeholder={"メールアドレス"}
          id={"email"}
          value={email}
          testid={"emailInput"}
          onChange={onChangeInputMail}
        />
      </div>
      <div className="mb-6">
        <p className="text-xs text-red-600">{passwordValidationMsg}</p>
        <PrimaryInput
          type={"password"}
          placeholder={"パスワード"}
          id={"password"}
          value={password}
          testid={"passwordInput"}
          onChange={onChangePassword}
        />
      </div>
      <div className="mt-6 mb-2">
        <PrimaryButton
          disabled={!emailIsValid || !passwordIsValid}
          testid={"loginButton"}
          onClick={async () => await login(email, password)}
        >
          ログイン
        </PrimaryButton>
      </div>
      <div className="mb-4 text-center">
        <span className="text-lg font-light text-gray-600">or</span>
      </div>
      <div className="mb-6">
        <GoogleButton
          testid={"googleLoginButton"}
          onClick={async () => await googleLogin()}
        >
          Googleアカウントでログイン
        </GoogleButton>
      </div>
      <div className="mb-6">
        <FacebookButton
          testid={"facebookLoginButton"}
          onClick={() => alert("Facebook")}
        >
          Facebookアカウントでログイン
        </FacebookButton>
      </div>
      <Link
        to="/register"
        className="block text-gray-600 hover:underline text-xs my-2"
        data-testid="toSignUpLink"
      >
        アカウント作成はこちら
      </Link>
      <Link
        to="/forgot_password"
        className="block text-gray-600 hover:underline text-xs my-2"
        data-testid="toForgtoPasswordLink"
      >
        パスワードをお忘れの方はこちら
      </Link>
    </div>
  );
};
