import React, { useRef } from "react";
import app from "firebase/app";
import FirebaseConf from "../FirebaseConf";

export default function Forgot() {
  const auth = app.auth();
  const mail = useRef("mail");

  const forgotPassword = () => {
    auth.sendPasswordResetEmail(mail.current.value).then(() => {
      alert("Check your mail");
    });
  };
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <input
              ref={mail}
              type="text"
              placeholder="Email to recover your password"
            ></input>
          </div>
        </form>
        <button
          className="btn waves-effect waves-light"
          onClick={forgotPassword}
        >
          Recover password
        </button>
      </div>
    </div>
  );
}
