import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./App.css";
import Child from "./Components/Child/Child";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {};

function App(props) {
  const { user, signOut, signInWithEmailAndPassword } = props;

  // TODO: get working on routed page
  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <p>Hello, {user.email}</p>
        ) : (
          <p>Sign in using email and password</p>
        )}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button
            onClick={() =>
              signInWithEmailAndPassword(
                "postmantest@hotmail.com",
                "postmantest"
              )
            }
          >
            Sign in Anonymously
          </button>
        )}
        <Child
          signInWithEmailAndPassword={signInWithEmailAndPassword}
          signOut={signOut}
          user={user}
        />
      </header>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
