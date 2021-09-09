import { ChangeEvent, useEffect, useState, memo, VFC } from "react";
import { useHistory } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { InputMail } from "../../molecules/InputMail";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import firebase from "../../firebase";
import { actionCodeSettings } from "../../firebase";

export const PasswordResetForm: VFC = memo((props) => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user && history.push("/");
    });
  }, [history]);

  const onChangeInputMail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onClickSend = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email, actionCodeSettings);
      setEmail("");
      history.push("/login");
    } catch (err: any) {
      alert(err);
      console.log(err);
    }
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
      <div className="mb-6">
        <InputMail onChange={onChangeInputMail} />
      </div>
      <div className="mt-6 mb-2">
        <PrimaryButton
          disabled={false}
          colorName={"navy"}
          onClick={onClickSend}
        >
          送信
        </PrimaryButton>
      </div>
    </div>
  );
});
