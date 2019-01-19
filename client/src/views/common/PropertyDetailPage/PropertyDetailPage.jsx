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
    const { property, loading } = this.props.property;

    let renderComponent;

    if (property === null || loading || Object.keys(property).length === 0) {
      renderComponent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    } else {
      const user = property.userDetails;

      renderComponent = <PropertyDetailUI property={property} agent={user} />;
    }

    return <div className="container">{renderComponent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    property: state.property
  };
};

export default connect(
  mapStateToProps,
  actions
)(PropertyDetailPage);
