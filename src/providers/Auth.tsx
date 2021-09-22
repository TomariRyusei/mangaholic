import { createContext, ReactNode, useEffect, useState } from "react";

import { Spinner } from "../components/atoms/spinner/Spinner";
import firebase from "../../src/firebase";

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
  const [authLoading, setAuthLoading] = useState(true);

  const { children } = props;
  useEffect(() => {
    const unsubscribed = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });

    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <>
      {authLoading ? (
        <Spinner />
      ) : (
        <AuthContext.Provider value={{ currentUser, authLoading }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};
export { AuthContext, AuthProvider };
