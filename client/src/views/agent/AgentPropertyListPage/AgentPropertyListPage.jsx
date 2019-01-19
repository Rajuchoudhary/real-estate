import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Pagination } from "../../../components";
import PropertyPageUI from "./PropertyPageUI";
import AgentMenu from "../AgentMenu";

class AgentPropertyListPage extends Component {
  state = {
    currentPage: 1,
    pageSize: 5,
    selectedFilter: "all"
  };
  componentWillMount() {
    this.props.getAllProperties(
      this.state.currentPage,
      this.state.pageSize,
      this.state.selectedFilter
    );
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
    this.props.getAllProperties(
      page,
      this.state.pageSize,
      this.state.selectedFilter
    );
  };
  deleteProperty = id => {
    this.props.deleteProperty(id);
  };
  render() {
    const { currentPage, pageSize } = this.state;
    let renderComponent;
    const { totalCount, properties, loading } = this.props.property;

    if (properties === null || loading) {
      renderComponent = <p>Loading</p>;
    } else {
      if (properties.length > 0) {
        renderComponent = (
          <PropertyPageUI
            deleteProperty={this.deleteProperty}
            dataList={properties}
          />
        );
      } else {
        renderComponent = <p>loading...</p>;
      }
    }
    if (properties.length === 0) {
      renderComponent = <p>no property found...</p>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          {/* left section */}
          <AgentMenu />
          {/* <!-- right section --> */}
          <div className="m-auto col-lg-8 col-md-8 col-sm-12  p-2 ">
            {/* <!-- Properties List --> */}
            <p className="display-4">Total properties: {totalCount}</p>
            {renderComponent}
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPrope = state => {
  return {
    property: state.property
  };
};

export default connect(
  mapStateToPrope,
  actions
)(AgentPropertyListPage);
