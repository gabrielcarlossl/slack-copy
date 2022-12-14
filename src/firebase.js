// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXPNcSEoLbn9_Xmz2CBed81suYRkqN0hg",
  authDomain: "slack-g7.firebaseapp.com",
  projectId: "slack-g7",
  storageBucket: "slack-g7.appspot.com",
  messagingSenderId: "160792196648",
  appId: "1:160792196648:web:70b9789a8dcfa76ccf271d"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}