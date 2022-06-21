import React, { Component } from "react";
import Forcast from "./Forcast";
import Current from "./Current";
import {  Switch,  Route,} from "react-router-dom";
import Spinner from "./Spinner";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      response: this.props.res
      };
    console.log(this.props.res);
  }
  static defaultProps = {
    location:'india'
  }

  async componentDidMount() {
    this.props.setProgress(0)
    let url =`http://api.weatherapi.com/v1/forecast.json?key=${this.props.apiKey}&q=${this.props.location}&days=1&aqi=yes&alerts=yes`
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(50)
    let parseData = await data.json();
    this.setState({response : parseData,loading:false},)  
    this.props.setProgress(100)
  }
  FetchWeather = async () =>{
    this.props.setProgress(0)
    let ele = document.getElementById('fetch')
    let temp = ele.value
    let url =`http://api.weatherapi.com/v1/forecast.json?key=${this.props.apiKey}&q=${temp.trim() === "" ? 'India':temp}&days=1&aqi=yes&alerts=yes`
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(50)
    let parseData = await data.json();
    this.setState({response : parseData,loading:false},)
    this.props.setProgress(100)
  }

  render() {
    return (
    <>
    <div className="container my-3">
    <label htmlFor="input"> Enter area :  
      <input className="my-3"  id = 'fetch' type="text" />
    </label>
    <button className="btn btn-primary btn-sm mx-3"  onClick={this.FetchWeather}>Fetch</button>
    </div>
    {this.state.loading && <Spinner/>}
      {!this.state.loading && <div className="container">          
        <Switch>
          {/* <Route path="/"><Current response={this.state.response}/></Route> */}
          <Route exact path="/"><Current response={this.state.response}/></Route>
          <Route exact path="/forcast"><Forcast response={this.state.response}/></Route>
        </Switch>       
      </div>}
    </>
    );
  }
}
