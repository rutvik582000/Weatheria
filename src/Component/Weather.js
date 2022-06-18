import React, { Component } from "react";
import Forcast from "./Forcast";
import Current from "./Current";
import {
  Switch,
  Route,
} from "react-router-dom";



export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {response: {
      "location": {
      "name": "Paris",
      "region": "Ile-de-France",
      "country": "France",
      "lat": 48.87,
      "lon": 2.33,
      "tz_id": "Europe/Paris",
      "localtime_epoch": 1655448358,
      "localtime": "2022-06-17 8:45"
      },
      "current": {
      "last_updated_epoch": 1655447400,
      "last_updated": "2022-06-17 08:30",
      "temp_c": 20,
      "temp_f": 68,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 2.2,
      "wind_kph": 3.6,
      "wind_degree": 120,
      "wind_dir": "ESE",
      "pressure_mb": 1023,
      "pressure_in": 30.21,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 64,
      "cloud": 0,
      "feelslike_c": 20,
      "feelslike_f": 68,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 6,
      "gust_mph": 5.1,
      "gust_kph": 8.3,
      "air_quality": {
      "co": 680.9000244140625,
      "no2": 55.5,
      "o3": 7.199999809265137,
      "so2": 5.800000190734863,
      "pm2_5": 33.599998474121094,
      "pm10": 39.70000076293945,
      "us-epa-index": 2,
      "gb-defra-index": 3
      }
      },
      "forecast": {
      "forecastday": [
      {
      "date": "2022-06-17",
      "date_epoch": 1655424000,
      "day": {
      "maxtemp_c": 32.5,
      "maxtemp_f": 90.5,
      "mintemp_c": 18.1,
      "mintemp_f": 64.6,
      "avgtemp_c": 25.5,
      "avgtemp_f": 78,
      "maxwind_mph": 5.1,
      "maxwind_kph": 8.3,
      "totalprecip_mm": 0,
      "totalprecip_in": 0,
      "avgvis_km": 10,
      "avgvis_miles": 6,
      "avghumidity": 43,
      "daily_will_it_rain": 0,
      "daily_chance_of_rain": 0,
      "daily_will_it_snow": 0,
      "daily_chance_of_snow": 0,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "uv": 8
      },
      "astro": {
      "sunrise": "05:47 AM",
      "sunset": "09:57 PM",
      "moonrise": "12:34 AM",
      "moonset": "08:44 AM",
      "moon_phase": "Waning Gibbous",
      "moon_illumination": "71"
      },
      "hour": [
      {
      "time_epoch": 1655416800,
      "time": "2022-06-17 00:00",
      "temp_c": 20.8,
      "temp_f": 69.4,
      "is_day": 0,
      "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
      },
      "wind_mph": 3.4,
      "wind_kph": 5.4,
      "wind_degree": 89,
      "wind_dir": "E",
      "pressure_mb": 1023,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 59,
      "cloud": 5,
      "feelslike_c": 20.8,
      "feelslike_f": 69.4,
      "windchill_c": 20.8,
      "windchill_f": 69.4,
      "heatindex_c": 20.8,
      "heatindex_f": 69.4,
      "dewpoint_c": 12.6,
      "dewpoint_f": 54.7,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 6.3,
      "gust_kph": 10.1,
      "uv": 1
      },
      {
      "time_epoch": 1655420400,
      "time": "2022-06-17 01:00",
      "temp_c": 20.2,
      "temp_f": 68.4,
      "is_day": 0,
      "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
      },
      "wind_mph": 3.4,
      "wind_kph": 5.4,
      "wind_degree": 95,
      "wind_dir": "E",
      "pressure_mb": 1023,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 61,
      "cloud": 3,
      "feelslike_c": 20.2,
      "feelslike_f": 68.4,
      "windchill_c": 20.2,
      "windchill_f": 68.4,
      "heatindex_c": 20.2,
      "heatindex_f": 68.4,
      "dewpoint_c": 12.4,
      "dewpoint_f": 54.3,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 6.3,
      "gust_kph": 10.1,
      "uv": 1
      },
      {
      "time_epoch": 1655424000,
      "time": "2022-06-17 02:00",
      "temp_c": 19.5,
      "temp_f": 67.1,
      "is_day": 0,
      "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
      },
      "wind_mph": 3.1,
      "wind_kph": 5,
      "wind_degree": 100,
      "wind_dir": "E",
      "pressure_mb": 1022,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 62,
      "cloud": 3,
      "feelslike_c": 19.5,
      "feelslike_f": 67.1,
      "windchill_c": 19.5,
      "windchill_f": 67.1,
      "heatindex_c": 19.5,
      "heatindex_f": 67.1,
      "dewpoint_c": 12,
      "dewpoint_f": 53.6,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 6,
      "gust_kph": 9.7,
      "uv": 1
      },
      {
      "time_epoch": 1655427600,
      "time": "2022-06-17 03:00",
      "temp_c": 19.1,
      "temp_f": 66.4,
      "is_day": 0,
      "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
      },
      "wind_mph": 2.9,
      "wind_kph": 4.7,
      "wind_degree": 105,
      "wind_dir": "ESE",
      "pressure_mb": 1022,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 62,
      "cloud": 4,
      "feelslike_c": 19.1,
      "feelslike_f": 66.4,
      "windchill_c": 19.1,
      "windchill_f": 66.4,
      "heatindex_c": 19.1,
      "heatindex_f": 66.4,
      "dewpoint_c": 11.7,
      "dewpoint_f": 53.1,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 5.6,
      "gust_kph": 9,
      "uv": 1
      },
      {
      "time_epoch": 1655431200,
      "time": "2022-06-17 04:00",
      "temp_c": 18.6,
      "temp_f": 65.5,
      "is_day": 0,
      "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
      },
      "wind_mph": 3.4,
      "wind_kph": 5.4,
      "wind_degree": 107,
      "wind_dir": "ESE",
      "pressure_mb": 1022,
      "pressure_in": 30.18,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 63,
      "cloud": 5,
      "feelslike_c": 18.6,
      "feelslike_f": 65.5,
      "windchill_c": 18.6,
      "windchill_f": 65.5,
      "heatindex_c": 18.6,
      "heatindex_f": 65.5,
      "dewpoint_c": 11.5,
      "dewpoint_f": 52.7,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 6.5,
      "gust_kph": 10.4,
      "uv": 1
      },
      {
      "time_epoch": 1655434800,
      "time": "2022-06-17 05:00",
      "temp_c": 18.1,
      "temp_f": 64.6,
      "is_day": 0,
      "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
      },
      "wind_mph": 3.6,
      "wind_kph": 5.8,
      "wind_degree": 98,
      "wind_dir": "E",
      "pressure_mb": 1022,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 65,
      "cloud": 6,
      "feelslike_c": 18.1,
      "feelslike_f": 64.6,
      "windchill_c": 18.1,
      "windchill_f": 64.6,
      "heatindex_c": 18.1,
      "heatindex_f": 64.6,
      "dewpoint_c": 11.3,
      "dewpoint_f": 52.3,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 6.7,
      "gust_kph": 10.8,
      "uv": 1
      },
      {
      "time_epoch": 1655438400,
      "time": "2022-06-17 06:00",
      "temp_c": 18.6,
      "temp_f": 65.5,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.4,
      "wind_kph": 5.4,
      "wind_degree": 114,
      "wind_dir": "ESE",
      "pressure_mb": 1022,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 63,
      "cloud": 6,
      "feelslike_c": 18.6,
      "feelslike_f": 65.5,
      "windchill_c": 18.6,
      "windchill_f": 65.5,
      "heatindex_c": 18.6,
      "heatindex_f": 65.5,
      "dewpoint_c": 11.4,
      "dewpoint_f": 52.5,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 5.8,
      "gust_kph": 9.4,
      "uv": 5
      },
      {
      "time_epoch": 1655442000,
      "time": "2022-06-17 07:00",
      "temp_c": 20.4,
      "temp_f": 68.7,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.8,
      "wind_kph": 6.1,
      "wind_degree": 120,
      "wind_dir": "ESE",
      "pressure_mb": 1022,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 56,
      "cloud": 6,
      "feelslike_c": 20.4,
      "feelslike_f": 68.7,
      "windchill_c": 20.4,
      "windchill_f": 68.7,
      "heatindex_c": 20.4,
      "heatindex_f": 68.7,
      "dewpoint_c": 11.3,
      "dewpoint_f": 52.3,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 5.1,
      "gust_kph": 8.3,
      "uv": 6
      },
      {
      "time_epoch": 1655445600,
      "time": "2022-06-17 08:00",
      "temp_c": 22.5,
      "temp_f": 72.5,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 4.9,
      "wind_kph": 7.9,
      "wind_degree": 141,
      "wind_dir": "SE",
      "pressure_mb": 1022,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 50,
      "cloud": 4,
      "feelslike_c": 24.5,
      "feelslike_f": 76.1,
      "windchill_c": 22.5,
      "windchill_f": 72.5,
      "heatindex_c": 24.5,
      "heatindex_f": 76.1,
      "dewpoint_c": 11.4,
      "dewpoint_f": 52.5,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 5.8,
      "gust_kph": 9.4,
      "uv": 6
      },
      {
      "time_epoch": 1655449200,
      "time": "2022-06-17 09:00",
      "temp_c": 24.9,
      "temp_f": 76.8,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.4,
      "wind_kph": 5.4,
      "wind_degree": 152,
      "wind_dir": "SSE",
      "pressure_mb": 1023,
      "pressure_in": 30.2,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 43,
      "cloud": 4,
      "feelslike_c": 25.4,
      "feelslike_f": 77.7,
      "windchill_c": 24.9,
      "windchill_f": 76.8,
      "heatindex_c": 25.4,
      "heatindex_f": 77.7,
      "dewpoint_c": 11.4,
      "dewpoint_f": 52.5,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 3.8,
      "gust_kph": 6.1,
      "uv": 6
      },
      {
      "time_epoch": 1655452800,
      "time": "2022-06-17 10:00",
      "temp_c": 27,
      "temp_f": 80.6,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 2.9,
      "wind_kph": 4.7,
      "wind_degree": 168,
      "wind_dir": "SSE",
      "pressure_mb": 1023,
      "pressure_in": 30.21,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 36,
      "cloud": 5,
      "feelslike_c": 26.6,
      "feelslike_f": 79.9,
      "windchill_c": 27,
      "windchill_f": 80.6,
      "heatindex_c": 26.6,
      "heatindex_f": 79.9,
      "dewpoint_c": 10.8,
      "dewpoint_f": 51.4,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 3.4,
      "gust_kph": 5.4,
      "uv": 7
      },
      {
      "time_epoch": 1655456400,
      "time": "2022-06-17 11:00",
      "temp_c": 26.4,
      "temp_f": 79.5,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.8,
      "wind_kph": 6.1,
      "wind_degree": 138,
      "wind_dir": "SE",
      "pressure_mb": 1023,
      "pressure_in": 30.2,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 31,
      "cloud": 5,
      "feelslike_c": 25.8,
      "feelslike_f": 78.4,
      "windchill_c": 26.4,
      "windchill_f": 79.5,
      "heatindex_c": 25.8,
      "heatindex_f": 78.4,
      "dewpoint_c": 8.1,
      "dewpoint_f": 46.6,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 5.6,
      "gust_kph": 9,
      "uv": 7
      },
      {
      "time_epoch": 1655460000,
      "time": "2022-06-17 12:00",
      "temp_c": 28.1,
      "temp_f": 82.6,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 5.1,
      "wind_kph": 8.3,
      "wind_degree": 139,
      "wind_dir": "SE",
      "pressure_mb": 1022,
      "pressure_in": 30.19,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 28,
      "cloud": 2,
      "feelslike_c": 26.8,
      "feelslike_f": 80.2,
      "windchill_c": 28.1,
      "windchill_f": 82.6,
      "heatindex_c": 26.8,
      "heatindex_f": 80.2,
      "dewpoint_c": 7.8,
      "dewpoint_f": 46,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 7.6,
      "gust_kph": 12.2,
      "uv": 7
      },
      {
      "time_epoch": 1655463600,
      "time": "2022-06-17 13:00",
      "temp_c": 29.9,
      "temp_f": 85.8,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.4,
      "wind_kph": 5.4,
      "wind_degree": 151,
      "wind_dir": "SSE",
      "pressure_mb": 1022,
      "pressure_in": 30.18,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 25,
      "cloud": 5,
      "feelslike_c": 28.2,
      "feelslike_f": 82.8,
      "windchill_c": 29.9,
      "windchill_f": 85.8,
      "heatindex_c": 28.2,
      "heatindex_f": 82.8,
      "dewpoint_c": 7.8,
      "dewpoint_f": 46,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 4.5,
      "gust_kph": 7.2,
      "uv": 7
      },
      {
      "time_epoch": 1655467200,
      "time": "2022-06-17 14:00",
      "temp_c": 31.2,
      "temp_f": 88.2,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.1,
      "wind_kph": 5,
      "wind_degree": 145,
      "wind_dir": "SE",
      "pressure_mb": 1021,
      "pressure_in": 30.16,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 23,
      "cloud": 5,
      "feelslike_c": 29.4,
      "feelslike_f": 84.9,
      "windchill_c": 31.2,
      "windchill_f": 88.2,
      "heatindex_c": 29.4,
      "heatindex_f": 84.9,
      "dewpoint_c": 7.9,
      "dewpoint_f": 46.2,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 3.8,
      "gust_kph": 6.1,
      "uv": 8
      },
      {
      "time_epoch": 1655470800,
      "time": "2022-06-17 15:00",
      "temp_c": 31.9,
      "temp_f": 89.4,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.4,
      "wind_kph": 5.4,
      "wind_degree": 148,
      "wind_dir": "SSE",
      "pressure_mb": 1021,
      "pressure_in": 30.15,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 23,
      "cloud": 5,
      "feelslike_c": 30,
      "feelslike_f": 86,
      "windchill_c": 31.9,
      "windchill_f": 89.4,
      "heatindex_c": 30,
      "heatindex_f": 86,
      "dewpoint_c": 7.9,
      "dewpoint_f": 46.2,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 4.3,
      "gust_kph": 6.8,
      "uv": 8
      },
      {
      "time_epoch": 1655474400,
      "time": "2022-06-17 16:00",
      "temp_c": 32.4,
      "temp_f": 90.3,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 4.3,
      "wind_kph": 6.8,
      "wind_degree": 151,
      "wind_dir": "SSE",
      "pressure_mb": 1021,
      "pressure_in": 30.14,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 22,
      "cloud": 5,
      "feelslike_c": 30.6,
      "feelslike_f": 87.1,
      "windchill_c": 32.4,
      "windchill_f": 90.3,
      "heatindex_c": 30.6,
      "heatindex_f": 87.1,
      "dewpoint_c": 8.3,
      "dewpoint_f": 46.9,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 5.6,
      "gust_kph": 9,
      "uv": 8
      },
      {
      "time_epoch": 1655478000,
      "time": "2022-06-17 17:00",
      "temp_c": 32.5,
      "temp_f": 90.5,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 4.7,
      "wind_kph": 7.6,
      "wind_degree": 158,
      "wind_dir": "SSE",
      "pressure_mb": 1020,
      "pressure_in": 30.13,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 23,
      "cloud": 6,
      "feelslike_c": 30.8,
      "feelslike_f": 87.4,
      "windchill_c": 32.5,
      "windchill_f": 90.5,
      "heatindex_c": 30.8,
      "heatindex_f": 87.4,
      "dewpoint_c": 9,
      "dewpoint_f": 48.2,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 6.5,
      "gust_kph": 10.4,
      "uv": 8
      },
      {
      "time_epoch": 1655481600,
      "time": "2022-06-17 18:00",
      "temp_c": 32.3,
      "temp_f": 90.1,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 4,
      "wind_kph": 6.5,
      "wind_degree": 167,
      "wind_dir": "SSE",
      "pressure_mb": 1020,
      "pressure_in": 30.13,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 26,
      "cloud": 6,
      "feelslike_c": 30.9,
      "feelslike_f": 87.6,
      "windchill_c": 32.3,
      "windchill_f": 90.1,
      "heatindex_c": 30.9,
      "heatindex_f": 87.6,
      "dewpoint_c": 10.3,
      "dewpoint_f": 50.5,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 5.6,
      "gust_kph": 9,
      "uv": 8
      },
      {
      "time_epoch": 1655485200,
      "time": "2022-06-17 19:00",
      "temp_c": 31.3,
      "temp_f": 88.3,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.1,
      "wind_kph": 5,
      "wind_degree": 163,
      "wind_dir": "SSE",
      "pressure_mb": 1020,
      "pressure_in": 30.13,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 31,
      "cloud": 5,
      "feelslike_c": 30.5,
      "feelslike_f": 86.9,
      "windchill_c": 31.3,
      "windchill_f": 88.3,
      "heatindex_c": 30.5,
      "heatindex_f": 86.9,
      "dewpoint_c": 12.2,
      "dewpoint_f": 54,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 4.5,
      "gust_kph": 7.2,
      "uv": 8
      },
      {
      "time_epoch": 1655488800,
      "time": "2022-06-17 20:00",
      "temp_c": 29.1,
      "temp_f": 84.4,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 2.2,
      "wind_kph": 3.6,
      "wind_degree": 160,
      "wind_dir": "SSE",
      "pressure_mb": 1021,
      "pressure_in": 30.14,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 39,
      "cloud": 5,
      "feelslike_c": 28.9,
      "feelslike_f": 84,
      "windchill_c": 29.1,
      "windchill_f": 84.4,
      "heatindex_c": 28.9,
      "heatindex_f": 84,
      "dewpoint_c": 13.9,
      "dewpoint_f": 57,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 3.8,
      "gust_kph": 6.1,
      "uv": 7
      },
      {
      "time_epoch": 1655492400,
      "time": "2022-06-17 21:00",
      "temp_c": 27,
      "temp_f": 80.6,
      "is_day": 1,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "wind_mph": 3.1,
      "wind_kph": 5,
      "wind_degree": 147,
      "wind_dir": "SSE",
      "pressure_mb": 1021,
      "pressure_in": 30.15,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 43,
      "cloud": 5,
      "feelslike_c": 27.1,
      "feelslike_f": 80.8,
      "windchill_c": 27,
      "windchill_f": 80.6,
      "heatindex_c": 27.1,
      "heatindex_f": 80.8,
      "dewpoint_c": 13.5,
      "dewpoint_f": 56.3,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 6.3,
      "gust_kph": 10.1,
      "uv": 7
      },
      {
      "time_epoch": 1655496000,
      "time": "2022-06-17 22:00",
      "temp_c": 26.1,
      "temp_f": 79,
      "is_day": 0,
      "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
      },
      "wind_mph": 3.6,
      "wind_kph": 5.8,
      "wind_degree": 139,
      "wind_dir": "SE",
      "pressure_mb": 1021,
      "pressure_in": 30.15,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 45,
      "cloud": 4,
      "feelslike_c": 26.5,
      "feelslike_f": 79.7,
      "windchill_c": 26.1,
      "windchill_f": 79,
      "heatindex_c": 26.5,
      "heatindex_f": 79.7,
      "dewpoint_c": 13.4,
      "dewpoint_f": 56.1,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 7.4,
      "gust_kph": 11.9,
      "uv": 1
      },
      {
      "time_epoch": 1655499600,
      "time": "2022-06-17 23:00",
      "temp_c": 25.1,
      "temp_f": 77.2,
      "is_day": 0,
      "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
      },
      "wind_mph": 4,
      "wind_kph": 6.5,
      "wind_degree": 138,
      "wind_dir": "SE",
      "pressure_mb": 1021,
      "pressure_in": 30.14,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 48,
      "cloud": 4,
      "feelslike_c": 25.8,
      "feelslike_f": 78.4,
      "windchill_c": 25.1,
      "windchill_f": 77.2,
      "heatindex_c": 25.8,
      "heatindex_f": 78.4,
      "dewpoint_c": 13.2,
      "dewpoint_f": 55.8,
      "will_it_rain": 0,
      "chance_of_rain": 0,
      "will_it_snow": 0,
      "chance_of_snow": 0,
      "vis_km": 10,
      "vis_miles": 6,
      "gust_mph": 8.3,
      "gust_kph": 13.3,
      "uv": 1
      }
      ]
      }
      ]
      },
      "alerts": {
      "alert": []
      }
      }
      };
  }
  static defaultProps = {
    location:'india'
  }


  async componentDidMount() {
    let url =`http://api.weatherapi.com/v1/forecast.json?key=9277f73f6fc547d09a262011221606&q=${this.props.location}&days=1&aqi=yes&alerts=yes`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({response : parseData},)
  }

  render() {
    return (
      <div className="container">
          <h3 className="text-center">
            <img src={this.state.response.current.condition.icon} alt="img" />
            {this.state.response.location.name}, {this.state.response.location.country}
          </h3>
          <p className="text-center">{this.state.response.location.localtime}</p>
       
        <Switch>
          <Route exact path="/current"><Current key="current" response={this.state.response}/></Route>
          <Route exact path="/forcast"><Forcast key="forcast" response={this.state.response}/></Route>
        </Switch>       
      </div>
    );
  }
}
