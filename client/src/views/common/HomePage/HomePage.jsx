import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { GoogleMap, CardOne } from "../../../components";

class HomePage extends React.Component {
  state = {
    loading: true,
    properties: []
  };

  componentDidMount() {
    this.props.getAllProperties();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.property.properties) {
      this.setState({
        loading: false,
        properties: nextProps.property.properties
      });
    }
  }

  render() {
    console.log(this.props.property.properties);
    console.log(this.state.loading);

    let renderComponent;
    const { properties, loading } = this.props.property;

    if (properties === null || loading) {
      renderComponent = <p>loading...</p>;
    }
    if (properties) {
      renderComponent = properties.slice(0, 3).map(property => {
        return (
          <div key={property._id} className="col-lg-4 col-md-6 col-sm-12 ">
            <CardOne
              img="https://casaroyal.fantasythemes.net/wp-content/uploads/2018/12/chuttersnap-348307-unsplash-1-2.jpg"
              title={property.title}
              price={property.price}
              area={property.area}
              beds={property.beds}
              baths={property.baths}
              garages={property.garages}
              btnText="View Details"
            />
          </div>
        );
      });
    }

    return (
      <React.Fragment>
        <GoogleMap width="100%" height="80vh" />
        <div className="container py-5" style={styles.common}>
          <h1 className="display-4 mb-5 text-center">Properties...</h1>
          <div className="row  m-auto">{renderComponent}</div>
          <div className="text-center my-5">
            <Link to="/properties-list" className="btn btn-primary mt-3">
              More Properties
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  common: {
    height: "100vh"
  }
};

const mapStateToProps = state => {
  return {
    property: state.property
  };
};

export default connect(
  mapStateToProps,
  actions
)(HomePage);
