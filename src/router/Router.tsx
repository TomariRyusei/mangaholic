import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { ForgotPassword } from "../components/pages/ForgotPassword";
import { Page404 } from "../components/pages/Page404";
import { AuthProvider } from "../providers/Auth";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <AuthProvider>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgot_password">
          <ForgotPassword />
        </Route>
      </AuthProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
