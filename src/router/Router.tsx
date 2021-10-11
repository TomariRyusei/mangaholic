import { VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { ForgotPassword } from "../components/pages/ForgotPassword";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { AuthProvider } from "../providers/Auth";
import { UnAuthPrivateRoute } from "./UnAuthPrivateRoute";

export const Router: VFC = () => {
  return (
    <Switch>
      <AuthProvider>
        <Route exact path="/" component={Home} />
        <UnAuthPrivateRoute path="/login" component={Login} />
        <UnAuthPrivateRoute path="/register" component={Register} />
        <UnAuthPrivateRoute
          path="/forgot_password"
          component={ForgotPassword}
        />
      </AuthProvider>
      <Route component={Page404} />
    </Switch>
  );
};
