import React, { Component } from "react";
import "../global.css";
import { connect } from "react-redux";
import { FiUserPlus } from "react-icons/fi";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import { signup } from "../../store/actions/AuthActions";
import Button from "../../components/button/Button";
import { Navigator } from "../../components/navigator/Navigator";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }
  handleSubmit = () => {
    var emailValidation =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!this.state.email) {
      return this.setState({ emailError: "Email Required" });
    } else if (!this.state.email.match(emailValidation)) {
      return this.setState({ emailError: "Invalid email" });
    } else {
      this.setState({ emailError: "" });
    }
    if (!this.state.password) {
      return this.setState({ passwordError: "Password Required" });
    } else if (this.state.password.length < 6) {
      return this.setState({
        passwordError: "Password should contain minimum six chracter",
      });
    } else {
      this.setState({ passwordError: "" });
    }
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signup(data,this.props.navigate);
   
  };

  render() {
    return (
      <div className="main_container">
        <div className="form_container">
          <div className="icon">
            <FiUserPlus size={"medium"} />
          </div>
          <p className="heading">Register User</p>
          <Input
            placeholder={"Email"}
            onChange={(e) => this.setState({ email: e.target.value })}
            name={"email"}
          />
          <p className="error_txt">{this.state.emailError}</p>
          <Input
            placeholder={"Password"}
            onChange={(e) => this.setState({ password: e.target.value })}
            value={this.state.password}
            name={"password"}
            type={"password"}
          />
          <p className="error_txt">{this.state.passwordError}</p>
          <div className="btn_container">
            <Button
              name={"Register"}
              onClick={this.handleSubmit}
            />
            <Link to="/login" className="navigation_txt">
              Already a user?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ AuthReducer }) => {
  return {
    user: AuthReducer.isUser,
  };
};
export default Navigator(connect(mapStateToProps, { signup })(Login));
