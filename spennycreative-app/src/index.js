import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAjEuMMoWhqMNZaAl0hEywritQhgoRoGws",
  authDomain: "spennycreative-app.firebaseapp.com",
  databaseURL: "https://spennycreative-app.firebaseio.com",
  projectId: "spennycreative-app",
  storageBucket: "",
  messagingSenderId: "529880867067",
  appId: "1:529880867067:web:85d4cad02f61f3ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
