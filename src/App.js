import React, { Component } from "react";
import Routing from "./routing/Routing";
import { Provider } from "react-redux";
import Store from "./config/Store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Routing />
        <ToastContainer />
      </Provider>
    );
  }
}
