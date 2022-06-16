import React, { Component } from "react";

export default class WeatherItems extends Component {
  render() {
    return (
      <>
        <h3>Latest weather of world</h3>
        <div className="container">
          <h4 className="text-center">
            <img src={this.props.imageUrl} alt="img" />
            {this.props.location}, {this.props.country}
          </h4>
          <p className="text-center">{this.props.time}</p>
        </div>

        <div className="container"></div>
        <h5>current weather</h5>
        <hr />
        <ul>
          <li>weather is {this.props.skyCondition}</li>
          <li>temperature is {this.props.temperature} degree centigrade</li>
          <li>pressure is about {this.props.pressure} mb</li>
          <li>sign of cloud is {this.props.cloud}</li>
          <li>wind speed is about {this.props.windSpeed} km/h</li>
        </ul>
        <h5>Tomorrow Weather Forcast</h5>
        <hr />
        <p>weather will be {this.props.FskyCondition} tomorrow
            <img src={this.props.FimageUrl} alt="img" />
        </p>
        <ul>
            <li>Sunrise time : {this.props.Fsunrise}</li>
            <li>Sunset time : {this.props.FsunSet}</li>
            <li>Moonrise time : {this.props.FmoonRise}</li>
            <li>Moonset time : {this.props.FmoonSet}</li>
            <li>Maximum temperature will be {this.props.FmaxTemperature} degree centigrade</li>
            <li>Minimum temperature will be {this.props.FminTemperature} degree centigrade</li>
            <li>Maximum wind speed will be {this.props.FmaxTemperature} km/h</li>
            <li>Chance of rain and snow will be {this.props.rain} and {this.props.snow} </li>
        </ul>
      </>
    );
  }
}
