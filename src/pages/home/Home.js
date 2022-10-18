import React, { Component } from "react";
import { logout } from "../../store/actions/AuthActions";
import { connect } from "react-redux";
import Button from "../../components/button/Button";

class Home extends Component {

    handleLogout = () => {
      this.props.logout();
    };
  
  render() {
    return (
      <div className="home_container">
        <p className="home_heading"> Welcome to Login System</p>
          <Button name={"Logout"} onClick={this.handleLogout} />
      </div>
    );
  }
}
export default connect(null, { logout })(Home);
