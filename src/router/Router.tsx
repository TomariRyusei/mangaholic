import { VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { Page404 } from "../components/pages/Page404";
import { AuthProvider } from "../providers/Auth";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { AuthenticatedGuard } from "./AuthenticatedGuard";
import { UnAuthenticatedRoute } from "./UnAuthenticatedRoute";
import { UnAuthenticatedGuard } from "./UnAuthenticatedGuard";

export const Router: VFC = () => {
  return (
    <Switch>
      <AuthProvider>
        <Route exact path="/">
          <Top />
        </Route>
        <UnAuthenticatedGuard>
          <UnAuthenticatedRoute />
        </UnAuthenticatedGuard>
        <AuthenticatedGuard>
          <AuthenticatedRoute />
        </AuthenticatedGuard>
      </AuthProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
