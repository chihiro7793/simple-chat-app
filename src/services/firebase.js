import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBryF7kcHoqokheOW_VX77AI3JS6QZtfHU",
    authDomain: "chihiro-4ee03.firebaseapp.com",
    databaseURL: "https://chihiro-4ee03.firebaseio.com",
    projectId: "chihiro-4ee03",
    storageBucket: "chihiro-4ee03.appspot.com",
    messagingSenderId: "170750729711",
    appId: "1:170750729711:web:80aaaa68555df80acb2a1a",
    measurementId: "G-J28X8SBK9W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;