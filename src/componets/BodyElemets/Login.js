import React from "react";

import { NavLink } from "react-router-dom";
import app from "firebase/app";
import { useHistory } from "react-router-dom";
import FirebaseConf from "../FirebaseConf";
import { useRef } from "react";
import Navbar from "../NavBar/Navbar";

export default function Login() {
  const auth = app.auth();
  const email = useRef("email");
  const password = useRef("password");
  const navigate = useHistory();
  const data = app.firestore();

  const SingInWithEmail = () => {
    auth
      .signInWithEmailAndPassword(email.current.value, password.current.value)
      .then(res => {
        let userCollection = data.collection("users");
        userCollection
          .where("mail", "==", email.current.value)
          .get()
          .then(res => {
            res.forEach(data => {
              console.log(data.id);
              localStorage.setItem("userId", data.id);
            });

            navigate.push("/");
            window.location.reload();
          });
      });
  };
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <input type="text" placeholder="mail" ref={email}></input>
            <input
              type="password"
              placeholder="password"
              ref={password}
            ></input>
          </div>
        </form>
        <button
          className="btn waves-effect waves-light"
          onClick={SingInWithEmail}
        >
          Login
        </button>
        <div className="row">
          <NavLink to="/create_acc">Don't have account?</NavLink>
        </div>
        <div className="row">
          <NavLink to="/forgot">Forgot your password?</NavLink>
        </div>
      </div>
    </div>
  );
}
