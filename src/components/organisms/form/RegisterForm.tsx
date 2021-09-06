import { memo, VFC } from "react";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { TwitterButton } from "../../atoms/button/TwitterButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";
import { GithubButton } from "../../atoms/button/GithubButton";

type Props = {
  //   onChange: () => void;
};

export const RegisterForm: VFC<Props> = memo((props) => {
  const onChangeUserNameRegister = () => {
    console.log("username");
  };
  const onChangeEmailRegister = () => {
    console.log("email");
  };
  const onChangePasswordRegister = () => {
    console.log("password");
  };
  const onClickRegister = () => {
    alert("会員登録");
  };
  const onClickTwitterRegister = () => {
    alert("twitter");
  };
  const onClickGoogleRegister = () => {
    alert("goolge");
  };
  const onClickGihubRegister = () => {
    alert("github");
  };

  return (
    <div className="w-full min-w-min max-w-sm rounded">
      <hr className="border-gray-400 my-6" />
      <div className="mb-6">
        <PrimaryLabel>アカウント作成</PrimaryLabel>
      </div>
      <div className="mb-4">
        <PrimaryInput
          type={"text"}
          placeholder={"ユーザー名"}
          id={"usename"}
          onChange={onChangeUserNameRegister}
        />
      </div>
      <div className="mb-4">
        <PrimaryInput
          type={"email"}
          placeholder={"メールアドレス"}
          id={"email"}
          onChange={onChangeEmailRegister}
        />
      </div>
      <div className="mb-6">
        <PrimaryInput
          type={"password"}
          placeholder={"パスワード"}
          id={"password"}
          onChange={onChangePasswordRegister}
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
        <TwitterButton onClick={onClickTwitterRegister}>
          Twitterアカウントで登録
        </TwitterButton>
      </div>
      <div className="mb-6">
        <GoogleButton onClick={onClickGoogleRegister}>
          Googleアカウントで登録
        </GoogleButton>
      </div>
      <div className="mb-6">
        <GithubButton onClick={onClickGihubRegister}>
          Githubアカウントで登録
        </GithubButton>
      </div>
      <a
        href="/login"
        className="block text-gray-600 hover:underline text-xs my-1"
      >
        アカウントをお持ちの方はこちら
      </a>
      <a href="#" className="blocktext-gray-600 hover:underline text-xs my-1">
        キャンセル
      </a>
    </div>
  );
});
