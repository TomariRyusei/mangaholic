import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import firebase, { auth, actionCodeSettings } from "../firebase";
import { useFlashMessage } from "./useFlashMessage";
import { useFormValidation } from "./useFormValidation";

export const useAuth = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();
  const {
    emailValidation,
    passwordValidation,
    emailValidationMsg,
    emailIsValid,
    passwordValidationMsg,
    passwordIsValid,
  } = useFormValidation();

  const onChangeInputUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangeInputMail = (e: ChangeEvent<HTMLInputElement>) => {
    emailValidation(e.target.value);
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    passwordValidation(e.target.value);
    setPassword(e.target.value);
  };

  const login = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      showSuccessMessage("ログインしました");
      history.push("/home");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      showErrorMessage(msg);
      console.log(err);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      // ユーザー名を追加
      await user?.updateProfile({
        displayName: username,
      });
      showSuccessMessage("アカウントを作成しました");
      history.push("/home");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      showErrorMessage(msg);
      console.log(err);
    }
  };

  const googleLogin = async () => {
    try {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(googleAuthProvider);
      showSuccessMessage("ログインしました");
      history.push("/home");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      showErrorMessage(msg);
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      showSuccessMessage("ログアウトしました");
      history.push("/login");
    } catch (err: any) {
      console.log(err);
      showErrorMessage("ログアウトに失敗しました");
    }
  };

  const passwordReset = async (email: string) => {
    try {
      await auth.sendPasswordResetEmail(email, actionCodeSettings);
      showSuccessMessage("パスワード再設定用のメールを送信しました");
    } catch (err: any) {
      console.log(err);
      showErrorMessage("パスワード再設定用のメールの送信に失敗しました");
    }
  };

  const authErrorHandling = (code: string): string => {
    let msg = "";
    switch (code) {
      case "auth/invalid-email":
        msg = "メールアドレスに指定された値は無効です。";
        break;
      case "auth/invalid-password":
        msg =
          "パスワードに指定された値は無効です。6文字以上の文字列を指定する必要があります。";
        break;
      case "auth/weak-password":
        msg = "パスワードの強度が不足しています。";
        break;
      case "auth/wrong-password":
        msg = "パスワードが正しくありません。";
        break;
      case "auth/email-already-exists":
        msg = "入力されたメールアドレスはすでに使用されています。";
        break;
      case "auth/email-already-in-use":
        msg = "入力されたメールアドレスはすでに使用されています。";
        break;
      case "auth/user-not-found":
        msg = "ユーザーが存在しません。";
        break;
      case "auth/internal-error":
        msg =
          "リクエストの処理中に、認証サーバーで予期しないエラーが発生しました。";
        break;
      default:
        msg = "認証処理でエラーが発生しました。";
        break;
    }
    return msg;
  };

  return {
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
    login,
    register,
    googleLogin,
    logout,
    passwordReset,
  };
};
