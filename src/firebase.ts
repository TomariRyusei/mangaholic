import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .settings({ experimentalForceLongPolling: true, merge: true });

// firebaseパスワードリセット後のリダイレクトの設定
export const actionCodeSettings = {
  url: "http://localhost:3000/login",
  handleCodeInApp: false,
};

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export default firebase;
