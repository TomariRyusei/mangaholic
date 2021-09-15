import {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  useContext,
  VFC,
} from "react";
import { useHistory, Link } from "react-router-dom";

import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { FacebookButton } from "../../atoms/button/FacebookButton";
import { GoogleButton } from "../../atoms/button/GoogleButton";
import firebase from "../../../firebase";
import { useAuth } from "../../../hooks/useAuth";
import { useFlashMessage } from "../../../hooks/useFlashMessage";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { AuthContext } from "../../../providers/Auth";

export const RegisterForm: VFC = () => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  const { authErrorHandling } = useAuth();
  const { showSuccessMessage, showErrorMessage } = useFlashMessage();
  const {
    emailValidation,
    passwordValidation,
    emailValidationMsg,
    emailIsValid,
    passwordValidationMsg,
    passwordIsValid,
  } = useFormValidation();

  useEffect(() => {
    currentUser && history.push("/");
  }, [history, currentUser]);

  const onChangeInputMail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      emailValidation(e.target.value);
      setEmail(e.target.value);
    },
    [emailValidation]
  );
  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      passwordValidation(e.target.value);
      setPassword(e.target.value);
    },
    [passwordValidation]
  );
  const onClickRegister = useCallback(async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      showSuccessMessage("アカウントを作成しました");
      history.push("/");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      showErrorMessage(msg);
      console.log(err);
    }
  }, [
    email,
    password,
    history,
    authErrorHandling,
    showSuccessMessage,
    showErrorMessage,
  ]);
  const onClickFacebookLogin = useCallback(() => {
    alert("Facebook");
  }, []);
  const onClickGoogleRegister = useCallback(async () => {
    try {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(googleAuthProvider);
      showSuccessMessage("アカウントを作成しました");
    } catch (err: any) {
      const msg = authErrorHandling(err.code);
      showErrorMessage(msg);
      alert(msg);
    }
  }, [authErrorHandling, showSuccessMessage, showErrorMessage]);

  return (
    <div className="w-full min-w-min max-w-sm border rounded overflow-hidden shadow-xl px-8 pb-6 pt-4 my-6">
      <div className="mb-6">
        <PrimaryLabel>アカウント作成</PrimaryLabel>
      </div>
      <div className="mb-6">
        <p className="text-xs text-red-600">{emailValidationMsg}</p>
        <PrimaryInput
          type={"email"}
          placeholder={"メールアドレス"}
          id={"email"}
          value={email}
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
          onChange={onChangePassword}
        />
      </div>
      <div className="mt-6 mb-2">
        <PrimaryButton
          disabled={!emailIsValid || !passwordIsValid}
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
        <GoogleButton onClick={onClickGoogleRegister}>
          Googleアカウントで登録
        </GoogleButton>
      </div>
      <div className="mb-6">
        <FacebookButton onClick={onClickFacebookLogin}>
          Facebookアカウントで登録
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
