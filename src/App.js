import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import Weather from './Component/Weather'

export default class App extends Component {
  render() {
    return (
      <div>        
        <Navbar/>
        <Weather/>
      </div>
    )
  }
}

//key 9277f73f6fc547d09a262011221606
//http://api.weatherapi.com/v1/current.json?key=9277f73f6fc547d09a262011221606&q=London&aqi=no
//http://api.weatherapi.com/v1/forecast.json?key=9277f73f6fc547d09a262011221606&q=India&days=1&aqi=yes&alerts=yes