export const useAuth = () => {
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
      case "auth/wrong-password":
        msg = "パスワードが正しくありません。";
        break;
      case "auth/email-already-exists":
        msg =
          "入力されたメールアドレスはすでに既存のユーザーによって使用されています。";
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

  return { authErrorHandling };
};
