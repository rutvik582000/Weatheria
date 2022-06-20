import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import Weather from "./Component/Weather";
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Weather/>
        </div>
      </Router>
    );
  }
}

//key 9277f73f6fc547d09a262011221606
//http://api.weatherapi.com/v1/current.json?key=9277f73f6fc547d09a262011221606&q=London&aqi=no
//http://api.weatherapi.com/v1/forecast.json?key=9277f73f6fc547d09a262011221606&q=India&days=1&aqi=yes&alerts=yes
