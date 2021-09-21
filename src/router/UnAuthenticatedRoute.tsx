import { Route, Switch } from "react-router-dom";
import { VFC } from "react";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { ForgotPassword } from "../components/pages/ForgotPassword";

// 未認証でないとアクセス出来ないルート
export const UnAuthenticatedRoute: VFC = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forgot_password">
        <ForgotPassword />
      </Route>
    </Switch>
  );
};
