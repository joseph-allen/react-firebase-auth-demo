import React from "react";
import "../../App.css";

function Child(props) {
  const { user, signOut, signInWithEmailAndPassword } = props;

  return (
    <div className="App-child">
      <p>Child component</p>
      {user ? <p>Hello, {user.email}</p> : <p>Please sign in.</p>}
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button
          onClick={() =>
            signInWithEmailAndPassword("postmantest@hotmail.com", "postmantest")
          }
        >
          Sign in Anonymously
        </button>
      )}
    </div>
  );
}

export default Child;
