import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import logo from "../public/logo512.png";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./App.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {};

const { user, signOut, signInWithGoogle } = this.props;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </header>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
