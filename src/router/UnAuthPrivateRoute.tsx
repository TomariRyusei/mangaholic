import { VFC, useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { AuthContext } from "../providers/Auth";

export const UnAuthPrivateRoute: VFC<RouteProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(innerProps) =>
        currentUser ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: innerProps.location },
            }}
          />
        ) : (
          <Route {...props} />
        )
      }
    />
  );
};
