import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../dataLayer/firebase-config";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => {
        alert(e.message);
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
          <h5>Name</h5>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
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
        <div className="login_checkbox">
          <input type="checkbox" />
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>

        <button className="signUp" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
