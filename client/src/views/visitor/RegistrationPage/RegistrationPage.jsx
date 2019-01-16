import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

class RegistrationPage extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onInputChange = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const registrationDetail = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(registrationDetail, this.props.history);
  };

  render() {
    console.log(this.state.errors);

    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-4 col-md-6 col-sm-8 offset-md-4 offset-sm-2 border p-3 pb-4">
            <form onSubmit={this.onFormSubmit}>
              <div className="title text-center display-4 mb-5">
                Registration
              </div>
              <div className="form-group">
                <label htmlFor="email">Full Name:</label>
                <input
                  type="text"
                  className={
                    this.state.errors.name
                      ? "form-control is-invalid"
                      : "form-control is-valid"
                  }
                  placeholder="your full name"
                  name="name"
                  onChange={this.onInputChange}
                  value={this.state.name}
                />
                <div
                  className={
                    this.state.errors.name
                      ? "invalid-feedback"
                      : "valid-feedback"
                  }
                >
                  {this.state.errors.name}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
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
              <div className="form-group">
                <label htmlFor="password">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control is-invalid"
                  name="password2"
                  placeholder="confirm password"
                  onChange={this.onInputChange}
                  value={this.state.password2}
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
)(RegistrationPage);
