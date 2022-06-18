import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
          <>
          <nav className="navbar navbar-expand-lg navbar-dark " style = {{backgroundColor : '#0019af'}}>
          <a className="navbar-brand" href="/">Weatheria</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Current Weather <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Tomorrow's forcast</a>
              </li>
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