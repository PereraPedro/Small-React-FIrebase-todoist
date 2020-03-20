import React from "react";
import { useState, useRef, useEffect } from "react";

import FirebaseConf from "./../FirebaseConf";
import app from "firebase/app";
import { useHistory } from "react-router-dom";

export default function CreateAcc() {
  const name = useRef("");
  const surname = useRef("");
  const password = useRef("");
  const email = useRef("");
  const navigate = useHistory();
  const uniqid = require("uniqid");
  const [docRef, setDocRef] = useState("");

  const auth = app.auth();
  const bd = app.firestore();

  const CreateUserWithEmail = () => {
    auth
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then(res => {
        let ids = uniqid();
        localStorage.setItem("userId", ids);

        bd.collection("users")
          .doc(ids)
          .set({
            id: ids,
            mail: email.current.value,
            name: name.current.value,
            surname: surname.current.value
          });
        navigate.push("/");
        window.location.reload();
      });
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="row">
            <input type="text" placeholder="Email" ref={email} />
            <input type="text" placeholder="Name" ref={name}></input>
            <input type="text" placeholder="Surname" ref={surname} />
            <input
              type="password"
              placeholder="password"
              ref={password}
            ></input>

            <button
              className="waves-effect waves-light btn-large"
              onClick={CreateUserWithEmail}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
