import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

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
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-4 col-md-6 col-sm-8 offset-md-4 offset-sm-2 border p-3 pb-4">
            <form onSubmit={this.onFormSubmit}>
              <div className="title text-center display-4">Login</div>
              <div className="form-group">
                <label htmlFor="email">You email:</label>
                <input
                  type="text"
                  className="form-control is-valid"
                  placeholder="your email"
                  name="email"
                  onChange={this.onInputChange}
                  value={this.state.email}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control is-invalid"
                  name="password"
                  placeholder="password"
                  onChange={this.onInputChange}
                  value={this.state.password}
                />
                <div className="invalid-feedback">Password incorrect</div>
              </div>
              <div className="div">
                <input
                  type="submit"
                  className="btn btn-primary btn-block"
                  value="login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
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
