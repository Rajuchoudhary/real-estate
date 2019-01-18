import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import PropertyDetailUI from "./PropertyDetailUI";

class PropertyDetailPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getProperty(id, this.props.history);
  }

  render() {
    const { property, loading } = this.props.property;

    console.log(property);

    let renderComponent;

    if (property === null || loading || Object.keys(property).length === 0) {
      renderComponent = <p>Loading...</p>;
    } else {
      const user = property.userDetails;
      console.log(property);

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
