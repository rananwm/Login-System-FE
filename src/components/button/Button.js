import React, { Component } from "react";
import "./button.css";

export default class Button extends Component {
  render() {
    return (
      <button
        className="custom_btn"
        type={this?.props?.type}
        onClick={this?.props?.onClick}
      >
        {this?.props?.name}
      </button>
    );
  }
}
