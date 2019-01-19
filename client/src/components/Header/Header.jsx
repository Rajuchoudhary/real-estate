import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  onlogoutClick = () => {
    this.props.clearCurrentUser();
    this.props.logoutUser();
  };

  render() {
    const authLinks = (
      <React.Fragment>
        <NavLink className="bg-warning nav-item nav-link" to="/agent/dashboard">
          Dashboard
        </NavLink>
        <NavLink
          onClick={this.onlogoutClick}
          className="nav-item nav-link"
          to="/"
        >
          Logout
        </NavLink>
      </React.Fragment>
    );
    const guestLinks = (
      <React.Fragment>
        <NavLink className="nav-item nav-link" to="/registration">
          Register
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login">
          Login
        </NavLink>
      </React.Fragment>
    );

    return (
      <header style={{ width: "100%" }} className="bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              NextHouse
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <NavLink className="nav-item nav-link" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-item nav-link" to="/properties-list">
                  Properties List
                </NavLink>
                <NavLink className="nav-item nav-link" to="/agents-list">
                  Agents List
                </NavLink>
                <NavLink className="nav-item nav-link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-item nav-link" to="/contact">
                  Contact
                </NavLink>
                {this.props.auth.isAuthenticated ? authLinks : guestLinks}
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Header);
