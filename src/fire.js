import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAS9SlERkZQc8_SJXLvsOf0A2mqSvtY-eA",
  authDomain: "starfy-7a1d3.firebaseapp.com",
  projectId: "starfy-7a1d3",
  storageBucket: "starfy-7a1d3.appspot.com",
  messagingSenderId: "528875774700",
  appId: "1:528875774700:web:07477837b8e838acb43bc9",
  measurementId: "G-F6R1LN3VG7"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
