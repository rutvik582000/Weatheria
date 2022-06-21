import React, { Component } from 'react'

export default class Forcast extends Component {
  render() {
    return (
    <div className="container">
      <h2 className="text-center">
            <img src={this.props.response.forecast.forecastday[0].day.condition.icon} alt="img" />
            {this.props.response.location.name}, {this.props.response.location.country}
          </h2>
          <p className="text-center">{this.props.response.location.localtime}</p>
        <h4>Tomorrow Weather Forcast</h4>
        <hr />
        <p>Weather will be {this.props.response.forecast.forecastday[0].day.condition.text} tomorrow
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
    </div>
    )
  }
}
