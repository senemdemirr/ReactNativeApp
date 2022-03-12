import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdSJaI7dd_qwhn7M2r4CllAW5wTnzKG48",
  authDomain: "projectfirebase-86b32.firebaseapp.com",
  projectId: "projectfirebase-86b32",
  storageBucket: "projectfirebase-86b32.appspot.com",
  messagingSenderId: "883491961793",
  appId: "1:883491961793:web:f841efb784342073ca4d40"
};

  let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const fireStore = firebase.firestore();
const auth = firebase.auth();
const background = firebase.functions();

export { fireStore, auth };