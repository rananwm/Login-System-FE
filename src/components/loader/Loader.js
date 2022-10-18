import React, { Component } from "react";
import { FlapperSpinner } from "react-spinners-kit";
import "./loader.css";

export default class loader extends Component {
  render() {
    return (
      <div className="loader_container">
        <FlapperSpinner size={100} color="white" loading={this.props.loader} />
      </div>
    );
  }
}
