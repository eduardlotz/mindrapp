import React from "react";
import "./App.css";

import backgroundSvg from "./assets/background.svg";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="background-container">
      <img src={backgroundSvg} className="background-svg" alt="" />
      <div className="container">
        <img src={logo} className="logo" alt="logo" />
        <form>
          <h1>Curious?</h1>
          <p className="subheader">We will notify you when it’s ready</p>
          <input type="text" placeholder="your@email.com" />
          <button className="btn-cta">Notify me!</button>
        </form>
      </div>
    </div>
  );
}

export default App;
