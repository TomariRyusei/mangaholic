import { VFC, useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { AuthContext } from "../providers/Auth";

export const AuthPrivateRoute: VFC<RouteProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(innerProps) =>
        currentUser ? (
          <Route {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: innerProps.location },
            }}
          />
        )
      }
    />
  );
};
