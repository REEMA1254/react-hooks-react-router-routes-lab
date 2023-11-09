import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
  
  <Router path="/Movies" > 
    Movies
    </Router>
    <Router path="/Actors" >
      Actors
      </Router>
      <Router path="/">
        Home
        </Router>
        <Router PATH ="/Directors">
          Directors
        </Router>
    <App />
  
  </BrowserRouter>
  document.getElementById("root")
);
