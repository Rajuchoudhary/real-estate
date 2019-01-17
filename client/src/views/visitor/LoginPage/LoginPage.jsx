import React from "react";
import { connect } from "react-redux";
import LoginPageUI from "./LoginPageUI";
import * as actions from "../../../store/actions";
import { Input } from "../../../components";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/agent/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/agent/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    const loginDetail = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(loginDetail);
  };

  onInputChange = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value
    });
  };
  render() {
    return (
      <LoginPageUI onFormSubmit={this.onFormSubmit}>
        <Input
          label="Your Email"
          placeholder="email..."
          name="email"
          onChange={this.onInputChange}
          value={this.state.value}
        />

        <Input
          label="Password"
          type="password"
          placeholder="password..."
          name="password"
          onChange={this.onInputChange}
          value={this.state.value}
        />
      </LoginPageUI>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(LoginPage);
