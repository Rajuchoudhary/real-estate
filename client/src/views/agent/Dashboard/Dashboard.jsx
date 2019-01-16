import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-xl-1 col-1 border-right pt-3"
            style={{ height: "90vh" }}
          >
            <div className="list-group">
              <NavLink
                to="/"
                className="list-group-item list-group-item-action"
              >
                Profile
              </NavLink>
              <Link to="/" className="list-group-item list-group-item-action">
                Properties
              </Link>
              <Link to="/" className="list-group-item list-group-item-action">
                Add New
              </Link>
            </div>
          </div>
          <div className="col-xl-10  col-10 pt-3">Dashboard</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
