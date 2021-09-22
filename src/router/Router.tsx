import { VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { ForgotPassword } from "../components/pages/ForgotPassword";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { AuthProvider } from "../providers/Auth";
import { AuthPrivateRoute } from "./AuthPrivateRoute";
import { UnAuthPrivateRoute } from "./UnAuthPrivateRoute";

export const Router: VFC = () => {
  return (
    <Switch>
      <AuthProvider>
        <Route exact path="/" component={Top} />
        <UnAuthPrivateRoute path="/login" component={Login} />
        <UnAuthPrivateRoute path="/register" component={Register} />
        <UnAuthPrivateRoute
          path="/forgot_password"
          component={ForgotPassword}
        />
        <AuthPrivateRoute path="/home" component={Home} />
      </AuthProvider>
      <Route component={Page404} />
    </Switch>
  );
};
