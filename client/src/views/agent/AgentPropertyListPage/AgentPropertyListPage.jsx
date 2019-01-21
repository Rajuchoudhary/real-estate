import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Pagination } from "../../../components";
import PropertyPageUI from "./PropertyPageUI";
import { AgentMenu } from "..";
import { Spinner } from "reactstrap";

class AgentPropertyListPage extends Component {
  state = {
    currentPage: 1,
    pageSize: 5,
    selectedFilter: "all"
  };
  componentWillMount() {
    this.props.getUserPropertyList(this.state.currentPage, this.state.pageSize);
  }
  componentWillUnmount() {
    this.props.clearError();
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
    const { totalCount, properties } = this.props.property;

    if (Object.keys(properties).length > 0) {
      renderComponent = (
        <PropertyPageUI
          deleteProperty={this.deleteProperty}
          dataList={properties}
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
