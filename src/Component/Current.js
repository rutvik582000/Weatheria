import React, { Component } from "react";


export default class WeatherItems extends Component {
  render() {
    return (
        <div className="container">
          <h5>Current Weather</h5>
          <hr />
          <ul>
            <li>Weather is {this.props.response.current.condition.text}</li>
            <li>Temperature is {this.props.response.current.temp_c} degree centigrade</li>
            <li>Pressure is about {this.props.response.current.pressure_mb} mb</li>
            <li>Sign of cloud is {this.props.response.current.cloud}</li>
            <li>Wind speed is about {this.props.response.current.wind_kph} km/h</li>
          </ul>        
          <h5>Air Quality</h5>
          <ul>
            <li>Carbon monoxide level in air is {this.props.response.current.air_quality.co.toString().split('.')[0]} ppm</li>
            <li>Nitrogene dioxide level in air is {this.props.response.current.air_quality.no2.toString().split('.')[0]} ppm</li>
            <li>Ozone level in air is {this.props.response.current.air_quality.o3.toString().split('.')[0]} ppm</li>
            <li>Sulfur dioxide level in air is {this.props.response.current.air_quality.so2.toString().split('.')[0]} ppm</li>
            <li>Fine particulate matter  level in air is {this.props.response.current.air_quality.pm2_5.toString().split('.')[0]} ppm</li>
            <li>Aerosols level in air is {this.props.response.current.air_quality.pm10.toString().split('.')[0]} ppm</li>
          </ul>
        </div>        
    );
  }
}
