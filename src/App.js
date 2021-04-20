import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddSPD from "./components/spdData.component";


class App extends Component {

  state = { message: "" }
  callbackFunction = (childData) => {
        this.setState({message: "User ID - " + childData})
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/login" className="navbar-brand">
              CIRCADIAN&reg; Lighting Calculator
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/app1"} className="nav-link">
                  Light Source Measurement
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path="/app1" component={AddSPD} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
