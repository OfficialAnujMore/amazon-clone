import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
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
                <Login/>
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
