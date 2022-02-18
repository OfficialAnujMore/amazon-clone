import React, { useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../dataLayer/firebase-config";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopUp,
} from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    event.preventDefault();

    if (email === "") {
      alert("Enter a valid email");
    } else if (password.length <= 8) {
      alert("Enter a valid password");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          navigate("/");
        })
        .catch((e) => {
          alert("Oops! something went wrong");
        });
    }
  };
  const google = (event) => {
    event.preventDefault();

    signInWithGoogle()
      .then((res) => {
        navigate("/");
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signup">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
        alt="logo"
        className="signup_logo"
      />

      <div className="signup_container">
        <h1 className="container_signin">Sign in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          {/* <button className="signup_signIn" type="submit" onClick={login}>
            Sign in
          </button> */}
        </form>
        <div className="signup_checkbox">
          <input type="checkbox" />
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>

        <button className="signUp" onClick={register}>
          Sign up
        </button>
        <button className="googleAuth" onClick={google}>
          <img
            src="https://pngimg.com/uploads/google/google_PNG19630.png"
            alt="google"
            className="googleImg"
          />
          <p className="googleAuthText">Continue with google</p>
        </button>
      </div>
    </div>
  );
};

export default Signup;
