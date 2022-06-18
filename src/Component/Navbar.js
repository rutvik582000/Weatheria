import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
          <>
          <nav className="navbar navbar-expand-lg navbar-dark " style = {{backgroundColor : '#0019af'}}>
          <li className="navbar-brand" to="/">Weatheria</li>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link className="nav-link nav-item" to="/current">Current Weather <span className="sr-only">(current)</span></Link>
              <Link className="nav-link nav-item" to="/forcast">Tomorrow's forcast</Link>
            </ul>
          </div>
        </nav>          
      </>
    )
  }
}
// {setTimeout(() => {
//     let today = new Date()
//     let date = today.getDate()
//     let hours  = today.getHours()
//     let minutes  = today.getMinutes()
//     let seconds  = today.getSeconds()
//     console.log( hours +':' + minutes+':'+seconds)
// }, 1000)}