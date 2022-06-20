import React, { Component } from 'react'
import loading from './Loading_icon.gif'


export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img className='image-centerrounded mx-auto d-block' src={loading} alt="loading..." />
      </div>
    )
  }
}
