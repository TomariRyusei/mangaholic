import { createContext, ReactNode, useEffect, useState } from "react";
import firebase from "../../src/firebase";

type CurrentUser = {
  currentUser: firebase.User | null | undefined;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext<CurrentUser>({ currentUser: undefined });
const AuthProvider = (props: Props) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(undefined);
  const { children } = props;
  useEffect(() => {
    const unsubscribed = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
