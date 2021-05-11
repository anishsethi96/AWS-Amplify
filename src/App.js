import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./Circadian-ZircLight Logo.png"

import AddSPD from "./components/spdData.component";
import Home from "./components/home";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav class="navbar navbar-expand">
          <a href="/home" className="navbar-brand">
            <img src= {logo} alt="Sample SPD Input" height = "70px"/>
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={"/app1"} className="nav-link">
                Light Source Measurement
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/app1"} className="nav-link">
                Eye Level Illumination
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/app1"} className="nav-link">
                Table Top Illumination
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/app1"} className="nav-link">
                Save a Room
              </Link>
            </li>
            </ul>
            <ul class="navbar-nav">
              <li className="nav-item" >
                <Link to={"/app1"} className="nav-link">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/app1"} className="nav-link">
                  Create an Account
                </Link>
              </li>
            </ul>
          </div>
        </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path="/app1" component={AddSPD} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
