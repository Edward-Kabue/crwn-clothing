import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASg9j-Y1ZJVMVCuuBcDlCESgmM8Km3E3Y",
  authDomain: "crown-db-b8f27.firebaseapp.com",
  projectId: "crown-db-b8f27",
  storageBucket: "crown-db-b8f27.appspot.com",
  messagingSenderId: "416894856802",
  appId: "1:416894856802:web:94532b765413054999ab3b",
  measurementId: "G-PTMGNJ977J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
