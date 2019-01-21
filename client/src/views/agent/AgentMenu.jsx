import React from "react";
import { NavLink } from "react-router-dom";

class AgentMenu extends React.Component {
  render() {
    return (
      <div className="col-lg-2 col-md-2 col-sm-12 border-right pt-3">
        <div className="list-group">
          <NavLink
            to="/agent/dashboard"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/agent/properties"
            className="list-group-item list-group-item-action"
          >
            Properties
          </NavLink>
          <NavLink
            to="/agent/add-property"
            className="list-group-item list-group-item-action"
          >
            Add New
          </NavLink>
        </div>
      </div>
    );
  }
}

export default AgentMenu;
