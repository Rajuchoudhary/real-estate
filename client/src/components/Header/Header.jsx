import React from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
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
                <NavLink className="nav-item nav-link" to="/agencies-list">
                  Agencies List
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
                <NavLink className="nav-item nav-link" to="/registration">
                  Register
                </NavLink>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
