import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import AgentProfileUI from "./AgentProfileUI";

class AgentProfilePage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    this.props.getProfile(id, this.props.history);
  }

  render() {
    let renderComponent;
    const { profile, loading } = this.props.profile;

    console.log(loading, profile);

    if (profile === null || loading || Object.keys(profile).length === 0) {
      renderComponent = <p>Loading...</p>;
    } else {
      renderComponent = <AgentProfileUI profileData={profile} />;
    }
    return <div className="container">{renderComponent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  actions
)(AgentProfilePage);
