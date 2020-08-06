import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./App.css";
import Child from "./Components/Child/Child";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {};

function App(props) {
  const { user, signOut, signInWithEmailAndPassword } = props;

  // TODO: get working on routed page
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/routeTest">Route Test</Link>
            </li>
          </ul>
        </nav>
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
            <Switch>
              <Route path="/routeTest">
                <p>route test</p>
                <Child
                  signInWithEmailAndPassword={signInWithEmailAndPassword}
                  signOut={signOut}
                  user={user}
                />
              </Route>
              <Route path="/">
                <p>Home test</p>
              </Route>
            </Switch>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
