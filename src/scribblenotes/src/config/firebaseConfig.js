import firebase from "firebase";
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCNEA9kqGpU17QfmWzXcBcQ31Z-2K6Vfj0",
  authDomain: "scriblenotes-7bee9.firebaseapp.com",
  projectId: "scriblenotes-7bee9",
  storageBucket: "scriblenotes-7bee9.appspot.com",
  messagingSenderId: "466099037320",
  appId: "1:466099037320:web:29cb12dcfb2eaf6b1e2b3d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase 