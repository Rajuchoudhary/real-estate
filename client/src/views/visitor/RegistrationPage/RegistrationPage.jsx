import React from "react";

class RegistrationPage extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    password2: ""
  };

  onInputChange = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const registrationDetail = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(registrationDetail);
  };

  render() {
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
                  className="form-control is-valid"
                  placeholder="your full name"
                  name="fullName"
                  onChange={this.onInputChange}
                  value={this.state.fullName}
                />
                <div className="valid-feedback">Looks good!</div>
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

export default RegistrationPage;
