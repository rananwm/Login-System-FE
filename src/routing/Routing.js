import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { connect } from "react-redux";
import { isUser } from "../store/actions/AuthActions";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Loader from "../components/loader/Loader";

class Routing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  setIsLoading = () => {
    this.setState({
      isLoading: false,
    });
  };
  componentDidMount() {
    this.props.isUser(this.setIsLoading);
  }
  render() {
    console.log(this.props.user);
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute isUser={this.props.user}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = ({ AuthReducer }) => {
  return {
    user: AuthReducer.isUser,
  };
};

export default connect(mapStateToProps, { isUser })(Routing);
