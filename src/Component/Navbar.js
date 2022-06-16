import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style = {{backgroundColor : '#0019af'}}>
        <strong className="navbar-brand">Weatheria</strong>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
          
        </nav>
      </div>
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