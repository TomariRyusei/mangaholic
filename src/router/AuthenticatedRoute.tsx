import { Route, Switch } from "react-router-dom";
import { VFC } from "react";
import { Home } from "../components/pages/Home";

// 認証済みでないとアクセス出来ないルート
export const AuthenticatedRoute: VFC = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
};
