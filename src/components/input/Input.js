import React, { Component } from "react";
import "./input.css";

export default class Input extends Component {
  render() {
    return (
      <input
        className="input"
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        type={this?.props?.type || "text"}
      />
    );
  }
}
