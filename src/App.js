import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import Weather from "./Component/Weather";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "@weblif/react-top-loading-bar";


export default class App extends Component {
  state = {
    progress:10
  }
  apiKey = process.env.REACT_APP_WEATHER_API
  setProgress = (progress)=>{
    this.setState({
      progress:progress
    })
    console.log(this.apiKey);
  }
  render() {
    return (
      <>
        <div>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
        </div>
        <Router>
          <div>
            <Navbar />
            <Weather apiKey = {this.apiKey} setProgress={this.setProgress}/>
          </div>
        </Router>
      </>
    );
  }
}
