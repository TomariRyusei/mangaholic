import { VFC, useContext, ReactNode } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../providers/Auth";

type Props = {
  children: ReactNode;
};

// 認証済みならHomeページへリダイレクト
export const UnAuthenticatedGuard: VFC<Props> = (props) => {
  const { children } = props;
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Redirect to="/home" /> : <>{children}</>;
};
