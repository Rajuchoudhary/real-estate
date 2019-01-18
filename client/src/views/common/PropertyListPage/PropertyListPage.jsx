import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { CardTwo } from "../../../components";

class PropertyListPage extends React.Component {
  state = {
    currentPage: 1,
    pageSize: 5,
    selectedFilter: ""
  };

  componentDidMount() {
    this.props.getAllProperties();
  }

  onInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  render() {
    const { properties, loading } = this.props.property;

    let renderComponent;

    if (properties === null || loading) {
      renderComponent = <p>Loading</p>;
    } else {
      if (properties.length > 0) {
        {
          renderComponent = properties.map(property => {
            return (
              <CardTwo
                title={property.title}
                key={property._id}
                img="https://casaroyal.fantasythemes.net/wp-content/uploads/2018/12/chuttersnap-348307-unsplash-1-2.jpg"
                status={property.status}
                address={property.address}
                price={property.price}
                text={property.description}
                area={property.area}
                beds={property.beds}
                baths={property.baths}
                garages={property.garages}
              />
            );
          });
        }
      } else {
        renderComponent = <p>no properties found...</p>;
      }
    }

    return (
      <div className="container">
        <h1 className="display-4 my-5 text-center">Properties List:</h1>
        <div className="row">
          <div className="col-6">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                  Filter Properties:
                </label>
                <select
                  name="selectedFilter"
                  onChange={this.onInputChange}
                  className="form-control"
                >
                  {" "}
                  <option value="all">All</option>
                  <option value="rent">Rent</option>
                  <option value="sale">Sale</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="cards my-5">{renderComponent}</div>
      </div>
    );
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
)(PropertyListPage);
