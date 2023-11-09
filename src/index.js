import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import Movies from "./components/Movies";  
import Actors from "./components/Actors"; 
import Home from "./components/Home";  
import Directors from "./components/Directors";  
import { Switch } from "react-router-dom/cjs/react-router-dom.min";



ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/movies" component={Movies} />
    <Route path="/actors" component={Actors} />
    <Route exact path="/" component={Home} />
    <Route path="/directors" component={Directors} />
    <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

