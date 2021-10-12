/* eslint no-useless-escape: 0 */
import { useState } from "react";

export const useFormValidation = () => {
  const [emailValidationMsg, setEmailValidationMsg] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [passwordValidationMsg, setPasswordValidationMsg] =
    useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [mangaTitleValidationMsg, setMangaTitleValidationMsg] =
    useState<string>("");
  const [mangaTitleIsValid, setMangaTitleIsValid] = useState<boolean>(false);

  const emailValidation = (value: string) => {
    if (!value) {
      setEmailValidationMsg("※メールアドレスを入力してください");
      setEmailIsValid(false);
      return false;
    }
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(value)) {
      setEmailValidationMsg("※正しい形式でメールアドレスを入力してください");
      setEmailIsValid(false);
      return false;
    }
    setEmailValidationMsg("");
    setEmailIsValid(true);
    return true;
  };

  const passwordValidation = (value: string) => {
    if (!value) {
      setPasswordValidationMsg("※パスワードを入力してください");
      setPasswordIsValid(false);
      return false;
    }
    // 6文字以上、英数字が混在、大文字と小文字のアルファベットが含まれる
    const regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[!-~]{6,}$/;
    if (!regex.test(value)) {
      setPasswordValidationMsg(
        "※パスワードは6文字以上、半角の英小文、字大文字、数字をそれぞれ1種類以上含ませてください"
      );
      setPasswordIsValid(false);
      return false;
    }
    setPasswordValidationMsg("");
    setPasswordIsValid(true);
    return true;
  };

  const mangaTitleValidation = (value: string) => {
    if (!value) {
      setMangaTitleValidationMsg("※漫画のタイトルを入力してください");
      setMangaTitleIsValid(false);
      return false;
    }
    setMangaTitleValidationMsg("");
    setMangaTitleIsValid(true);
    return true;
  };

  return {
    emailValidation,
    passwordValidation,
    emailValidationMsg,
    emailIsValid,
    passwordValidationMsg,
    passwordIsValid,
    mangaTitleValidation,
    mangaTitleValidationMsg,
    mangaTitleIsValid,
  };
};
