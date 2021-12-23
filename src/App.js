import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./components/Home";

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
                <h1>Checkout</h1>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Headers />
                <h1>Sign in</h1>
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
