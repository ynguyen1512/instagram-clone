import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgBBMUW7Bk_8uUNY2nL1_MwBrdHXC5Uz0",
  authDomain: "instagram-clone-cd2ea.firebaseapp.com",
  projectId: "instagram-clone-cd2ea",
  storageBucket: "instagram-clone-cd2ea.appspot.com",
  messagingSenderId: "380148768331",
  appId: "1:380148768331:web:0e8b3e1587b2b29f2cb7ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase = () => {
  return <div>firebase</div>;
};

export default firebase;
