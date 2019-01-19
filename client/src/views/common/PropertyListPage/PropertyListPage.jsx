import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { CardTwo, Pagination } from "../../../components";
import { Spinner } from "reactstrap";

class PropertyListPage extends React.Component {
  state = {
    currentPage: 1,
    pageSize: 5,
    selectedFilter: "all"
  };

  componentDidMount() {
    this.props.getAllProperties(
      this.state.currentPage,
      this.state.pageSize,
      this.state.selectedFilter
    );
  }

  onInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });

    if (e.currentTarget.value === "all") {
      this.props.getAllProperties(1, 5, "all");
    } else if (e.currentTarget.value === "rent") {
      this.props.getAllProperties(1, 5, "rent");
    } else {
      this.props.getAllProperties(1, 5, "sale");
    }
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
    this.props.getAllProperties(
      page,
      this.state.pageSize,
      this.state.selectedFilter
    );
  };
  getPageDate = () => {
    // const { selectedFilter, currentPage, pageSize } = this.state;
    // let newCount;
    // if (selectedFilter === "all" || selectedFilter === "") {
    //   axios
    //     .get("/api/property/", {
    //       params: { status: "" }
    //     })
    //     .then(Count => {
    //       newCount = Count.data.totalCount;
    //       console.log("all", newCount);
    //       return newCount;
    //     })
    //     .catch(err => console.log(err));
    // }
    // if (selectedFilter === "rent" || selectedFilter === "sale") {
    //   axios
    //     .get("/api/property/", {
    //       params: { filter: selectedFilter }
    //     })
    //     .then(Count => {
    //       console.log("filtered", Count.data.totalCount);
    //       newCount = Count.data.totalCount;
    //     })
    //     .catch(err => console.log(err));
    // }
    // console.log("getData", newCount);
    // return { totalCount: newCount };
  };

  render() {
    let { pageSize, currentPage } = this.state;

    const { totalCount, properties, loading } = this.props.property;

    let renderComponent;

    if (
      properties === null ||
      loading ||
      Object.keys(properties).length === 0
    ) {
      renderComponent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    } else {
      if (properties.length > 0) {
        renderComponent = properties.map(property => {
          return (
            <CardTwo
              key={property._id}
              title={property.title}
              propertyId={property._id}
              agentId={property.user._id}
              agentName={property.user.name}
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

        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
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
