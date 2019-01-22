import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import PropertyDetailUI from "./PropertyDetailUI";
import { Spinner } from "reactstrap";

class PropertyDetailPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProperty(id, this.props.history);
  }

  render() {
    const { property } = this.props.property;

    let renderComponent;

    if (Object.keys(property).length > 0) {
      renderComponent = (
        <PropertyDetailUI
          property={property}
          agent={this.props.profile.profile}
        />
      );
    } else {
      renderComponent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }

    return <div className="container">{renderComponent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    property: state.property
  };
};

export default connect(
  mapStateToProps,
  actions
)(PropertyDetailPage);
