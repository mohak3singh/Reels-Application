import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCY7qVYutbj1-jiWG4qZYVzeqymq2weKf0",
  authDomain: "reels-e227f.firebaseapp.com",
  projectId: "reels-e227f",
  storageBucket: "reels-e227f.appspot.com",
  messagingSenderId: "379061422069",
  appId: "1:379061422069:web:a15460796bc5e03b4dc2bc",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
