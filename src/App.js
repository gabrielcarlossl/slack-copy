import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route path="/" exact element={<Home></Home>}></Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
