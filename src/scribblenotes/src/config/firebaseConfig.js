import firebase from "firebase";
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAsJ8UD8SAApD1lM6DNyZGu5FKeY8FLzG4",
  authDomain: "scribblenotes-51777.firebaseapp.com",
  projectId: "scribblenotes-51777",
  storageBucket: "scribblenotes-51777.appspot.com",
  messagingSenderId: "399336557814",
  appId: "1:399336557814:web:9aa55b6986bc2152b7f0d7",
  measurementId: "G-PB273ZBPWD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase 