import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./dataLayer/StateProvider";
import { useEffect } from "react";
import { auth } from "./dataLayer/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //logged in
        console.log("Logged in");
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        console.log("Not Logged in");
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>>", user);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <div>
                <Headers />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Headers />
                <Login />
              </div>
            }
          />
          {/* Default route */}
          <Route
            path="/"
            element={
              <div>
                <Headers />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
