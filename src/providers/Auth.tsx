import { createContext, ReactNode, useEffect, useState, useMemo } from "react";

import { Spinner } from "../components/atoms/spinner/Spinner";
import firebase, { auth } from "../../src/firebase";

type CurrentUser = {
  currentUser: firebase.User | null | undefined;
  authLoading: boolean;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext<CurrentUser>({
  currentUser: undefined,
  authLoading: true,
});

const AuthProvider = (props: Props) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(undefined);

  const [authLoading, setAuthLoading] = useState<boolean>(true);

  const { children } = props;
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });

    return () => {
      unsubscribed();
    };
  }, []);

  const providerValue = useMemo(
    () => ({ currentUser, authLoading }),
    [currentUser, authLoading]
  );

  return (
    <>
      {authLoading ? (
        <Spinner />
      ) : (
        <AuthContext.Provider value={providerValue}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};
export { AuthContext, AuthProvider };
