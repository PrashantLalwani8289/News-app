import React, { Component } from 'react'
import error from "./loading-error2.gif"

export default class Error extends Component {
  render() {
    return (
      <div>
        <img src={error} alt="Error" />
      </div>
    )
  }
}
