import { VFC, useContext, ReactNode } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../providers/Auth";

type Props = {
  children: ReactNode;
};

// 未認証ならログインページへリダイレクト
export const AuthenticatedGuard: VFC<Props> = (props) => {
  const { children } = props;
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <>{children}</> : <Redirect to="/login" />;
};
