import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAz4ZWZwkSnJ9ojibv1olnueaaEN6kitM8",
  authDomain: "facebook-clone-b9d29.firebaseapp.com",
  projectId: "facebook-clone-b9d29",
  storageBucket: "facebook-clone-b9d29.appspot.com",
  messagingSenderId: "169189810863",
  appId: "1:169189810863:web:8e05b8d9c726f1cd1daa5a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db