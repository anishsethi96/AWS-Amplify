import React, { Component } from "react";
import {Link } from "react-router-dom";
import { CSVReader } from 'react-papaparse';
import "../component.css";
import logo from "../Circadian-ZircLight Logo.png"

export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <h1> CIRCADIAN&reg; Lighting Calculator </h1>
        <Link to="/app1"> <button onClick={this.saveUserInfo} className="btn btn-success button">
          Get Started
        </button>
        </Link>
        <button onClick={this.saveUserInfo} className="btn btn-success button">
          Sign In
        </button>
      </div>
    );
  }
}
