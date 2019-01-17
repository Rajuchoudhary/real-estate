import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class PropertyPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* left section */}
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

          {/* <!-- right section --> */}
          <div className="m-auto col-lg-8 col-md-8 col-sm-12  p-2 ">
            <Link
              to="/agent/properties"
              className="btn btn-primary float-right"
            >
              <i className="fa fa-building" /> Total Properties 52
            </Link>

            {/* <!-- Properties List --> */}

            <div className="property-list">
              <h1 className="display-4 my-5 text-center">Properties list:</h1>
              <div className="row my-5">
                <div className="col">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Property</th>
                          <th>Address</th>
                          <th>Price</th>
                          <th>More Detail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://placeimg.com/80/80/nature"
                              className=" img-thumbnail border-0"
                              alt=""
                            />
                          </td>

                          <td>987 Cantebury Drive Chicago, IL 60610</td>
                          <td>$25000</td>
                          <td>
                            <div className="w-75 d-flex justify-content-around   ">
                              <Link
                                to="/property-detail"
                                className="btn btn-primary"
                              >
                                <i className="fa fa-edit" /> Edit
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-danger"
                              >
                                <i className="fa fa-trash-o" /> Delete
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-success"
                              >
                                <i className="fa fa-eye" /> View
                              </Link>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="https://placeimg.com/80/80/nature"
                              className=" img-thumbnail border-0"
                              alt=""
                            />
                          </td>

                          <td>987 Cantebury Drive Chicago, IL 60610</td>
                          <td>$25000</td>
                          <td>
                            <div className="w-75 d-flex justify-content-around   ">
                              <Link
                                to="/property-detail"
                                className="btn btn-primary"
                              >
                                <i className="fa fa-edit" /> Edit
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-danger"
                              >
                                <i className="fa fa-trash-o" /> Delete
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-success"
                              >
                                <i className="fa fa-eye" /> View
                              </Link>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="https://placeimg.com/80/80/nature"
                              className=" img-thumbnail border-0"
                              alt=""
                            />
                          </td>

                          <td>987 Cantebury Drive Chicago, IL 60610</td>
                          <td>$25000</td>
                          <td>
                            <div className="w-75 d-flex justify-content-around   ">
                              <Link
                                to="/property-detail"
                                className="btn btn-primary"
                              >
                                <i className="fa fa-edit" /> Edit
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-danger"
                              >
                                <i className="fa fa-trash-o" /> Delete
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-success"
                              >
                                <i className="fa fa-eye" /> View
                              </Link>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="https://placeimg.com/80/80/nature"
                              className=" img-thumbnail border-0"
                              alt=""
                            />
                          </td>

                          <td>987 Cantebury Drive Chicago, IL 60610</td>
                          <td>$25000</td>
                          <td>
                            <div className="w-75 d-flex justify-content-around   ">
                              <Link
                                to="/property-detail"
                                className="btn btn-primary"
                              >
                                <i className="fa fa-edit" /> Edit
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-danger"
                              >
                                <i className="fa fa-trash-o" /> Delete
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-success"
                              >
                                <i className="fa fa-eye" /> View
                              </Link>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="https://placeimg.com/80/80/nature"
                              className=" img-thumbnail border-0"
                              alt=""
                            />
                          </td>

                          <td>987 Cantebury Drive Chicago, IL 60610</td>
                          <td>$25000</td>
                          <td>
                            <div className="w-75 d-flex justify-content-around   ">
                              <Link
                                to="/property-detail"
                                className="btn btn-primary"
                              >
                                <i className="fa fa-edit" /> Edit
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-danger"
                              >
                                <i className="fa fa-trash-o" /> Delete
                              </Link>
                              <Link
                                to="/property-detail"
                                className="btn btn-success"
                              >
                                <i className="fa fa-eye" /> View
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a className="page-link" href="/" tabIndex="-1">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <!--end of .table-responsive--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyPage;
