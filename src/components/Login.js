import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../dataLayer/firebase-config";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    if (email === "") {
      alert("Enter a valid email");
    } else if (password.length <= 8) {
      alert("Enter a valid password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          navigate("/");
        })
        .catch((e) => alert("Oops! something went wrong"));
    }
  };
  const register = () => {
    navigate("/signup");
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
    <div className="login">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
        alt="logo"
        className="login_logo"
      />

      <div className="login_container">
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
          <button className="login_signIn" type="submit" onClick={login}>
            Sign in
          </button>
        </form>

        <button className="googleAuth" onClick={google}>
          <img
            src="https://pngimg.com/uploads/google/google_PNG19630.png"
            alt="google"
            className="googleImg"
          />
          <p className="googleAuthText">Continue with google</p>
        </button>

        <button className="signUpNew" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
