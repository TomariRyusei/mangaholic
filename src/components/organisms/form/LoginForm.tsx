import { memo, VFC } from "react";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { InputMail } from "../../molecules/InputMail";
import { InputPassword } from "../../molecules/InputPassword";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { TwitterButton } from "../../atoms/button/TwitterButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";

type Props = {
  //   onChange: () => void;
};

export const LoginForm: VFC<Props> = memo((props) => {
  const onClickLogin = () => {
    alert("会員登録");
  };
  const onClickTwitterLogin = () => {
    alert("twitter");
  };
  const onClickGoogleLogin = () => {
    alert("goolge");
  };

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl p-8 my-6">
      <div className="mb-6">
        <PrimaryLabel>ログイン</PrimaryLabel>
      </div>
      <div className="mb-4">
        <InputMail />
      </div>
      <div className="mb-6">
        <InputPassword />
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
      <a
        href="/login"
        className="block text-gray-600 hover:underline text-xs my-1"
      >
        アカウント作成はこちら
      </a>
      <a href="#" className="blocktext-gray-600 hover:underline text-xs my-1">
        キャンセル
      </a>
    </div>
  );
});
