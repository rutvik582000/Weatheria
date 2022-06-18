import React, { Component } from "react";

export default class WeatherItems extends Component {
  render() {
    // let {this.props.response} = this.props;
    return (
      <>
        <div className="container">
          <h4 className="text-center">
            <img src={this.props.response.current.condition.icon} alt="img" />
            {this.props.response.location.name}, {this.props.response.location.country}
          </h4>
          <p className="text-center">{this.props.response.location.localtime}</p>
        </div>

        <div className="container"></div>
        <h5>current weather</h5>
        <hr />
        <ul>
          <li>weather is {this.props.response.current.condition.text}</li>
          <li>temperature is {this.props.response.current.temp_c} degree centigrade</li>
          <li>pressure is about {this.props.response.current.pressure_mb} mb</li>
          <li>sign of cloud is {this.props.response.current.cloud}</li>
          <li>wind speed is about {this.props.response.current.wind_kph} km/h</li>
        </ul>
        <h5>Tomorrow Weather Forcast</h5>
        <hr />
        <p>weather will be {this.props.response.forecast.forecastday[0].day.condition.text} tomorrow
            <img src={this.props.response.forecast.forecastday[0].day.condition.icon} alt="img" />
        </p>
        <ul>
            <li>Sunrise time : {this.props.response.forecast.forecastday[0].astro.sunrise}</li>
            <li>Sunset time : {this.props.response.forecast.forecastday[0].astro.sunset}</li>
            <li>Moonrise time : {this.props.response.forecast.forecastday[0].astro.moonrise}</li>
            <li>Moonset time : {this.props.response.forecast.forecastday[0].astro.moonset}</li>
            <li>Maximum temperature will be {this.props.response.forecast.forecastday[0].day.maxtemp_c} degree centigrade</li>
            <li>Minimum temperature will be {this.props.response.forecast.forecastday[0].day.mintemp_c} degree centigrade</li>
            <li>Maximum wind speed will be {this.props.response.forecast.forecastday[0].day.maxwind_kph} km/h</li>
            <li>Chance of rain and snow will be {this.props.response.forecast.forecastday[0].day.daily_chance_of_rain} and {this.props.response.forecast.forecastday[0].day.daily_chance_of_snow} </li>
        </ul>
      </>
    );
  }
}
