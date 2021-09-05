import { memo, VFC } from "react";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { EmailInput } from "../../molecules/formInput/EmailInput";
import { PasswordInput } from "../../molecules/formInput/PasswordInput";
import { PasswordComfirmInput } from "../../molecules/formInput/PasswordComfirmInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";

type Props = {
  //   onChange: () => void;
};

export const RegisterFormCard: VFC<Props> = memo((props) => {
  const onChangeEmail = () => {
    console.log("email");
  };
  const onChangePassword = () => {
    console.log("password");
  };
  const onChangePasswordComfirm = () => {
    console.log("password_comfirm");
  };
  const onClickRegister = () => {
    alert("会員登録");
  };
  const onClickCancel = () => {
    alert("キャンセル");
  };
  const onClickTwitterRegister = () => {
    alert("twitter");
  };
  const onClickGoogleRegister = () => {
    alert("goolge");
  };
  const onClickFacebookRegister = () => {
    alert("facebook");
  };
  return (
    <div className="w-full min-w-min max-w-xl rounded">
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <PrimaryLabel>新規登録</PrimaryLabel>
        </div>
        <div className="mb-4">
          <EmailInput onChange={onChangeEmail} />
        </div>
        <div className="mb-6">
          <PasswordInput onChange={onChangePassword} />
        </div>
        <div className="mb-6">
          <PasswordComfirmInput onChange={onChangePasswordComfirm} />
        </div>
        <div className="flex items-center justify-start">
          <PrimaryButton disabled={false} onClick={onClickRegister}>
            新規登録
          </PrimaryButton>
          <SecondaryButton disabled={false} onClick={onClickCancel}>
            キャンセル
          </SecondaryButton>
        </div>
        <hr className="my-8" />
        <div className="mb-6">
          <TwitterLoginButton align={"center"} onClick={onClickTwitterRegister}>
            <p>Twitterアカウントで登録</p>
          </TwitterLoginButton>
        </div>
        <div className="mb-6">
          <GoogleLoginButton align={"center"} onClick={onClickGoogleRegister}>
            <p className="text-gray-700">Googleアカウントで登録</p>
          </GoogleLoginButton>
        </div>
        <div className="mb-6">
          <FacebookLoginButton
            align={"center"}
            onClick={onClickFacebookRegister}
          >
            <p>Facebookアカウントで登録</p>
          </FacebookLoginButton>
        </div>
      </form>
    </div>
  );
});
