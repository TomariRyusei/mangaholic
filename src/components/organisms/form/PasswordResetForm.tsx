import { ChangeEvent, useEffect, useContext, useState, memo, VFC } from "react";
import { useHistory } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useAuth } from "../../../hooks/useAuth";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { AuthContext } from "../../../providers/Auth";

export const PasswordResetForm: VFC = memo(() => {
  const [email, setEmail] = useState<string>("");
  const { currentUser } = useContext(AuthContext);
  const { passwirdReset } = useAuth();
  const { emailValidation, emailValidationMsg, emailIsValid } =
    useFormValidation();
  const history = useHistory();

  useEffect(() => {
    currentUser && history.push("/");
  }, [currentUser, history]);

  const onChangeInputMail = (e: ChangeEvent<HTMLInputElement>) => {
    emailValidation(e.target.value);
    setEmail(e.target.value);
  };

  const onClickSend = async () => {
    await passwirdReset(email);
  };

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-8 pb-6 pt-4 my-6">
      <div className="mb-6">
        <PrimaryLabel>パスワードを忘れてしまった場合</PrimaryLabel>
      </div>
      <div className="mb-6">
        <p className="block text-gray-600 hover:underline text-xs my-2">
          パスワードをリセットするには、メール アドレスを入力してください。
        </p>
      </div>
      <p className="text-xs text-red-600">{emailValidationMsg}</p>
      <div className="mb-6">
        <PrimaryInput
          type={"email"}
          placeholder={"メールアドレス"}
          id={"email"}
          value={email}
          onChange={onChangeInputMail}
        />
      </div>
      <div className="mt-6 mb-2">
        <PrimaryButton
          disabled={!emailIsValid}
          colorName={"navy"}
          onClick={onClickSend}
        >
          送信
        </PrimaryButton>
      </div>
    </div>
  );
});
