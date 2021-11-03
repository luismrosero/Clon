import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCNJ7jsDW3bTnT1QM_The9N-mYQRyTP7kk",
  authDomain: "colonstarfy.firebaseapp.com",
  projectId: "colonstarfy",
  storageBucket: "colonstarfy.appspot.com",
  messagingSenderId: "873494844124",
  appId: "1:873494844124:web:6f43272d7c0e8110f35a19",
  measurementId: "G-7FWKRYW9ND"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
