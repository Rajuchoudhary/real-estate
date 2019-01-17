import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class AddPropertyPage extends Component {
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
          <div className="m-auto col-lg-8 col-md-8 col-sm-12  p-2">
            <Link
              to="/agent/properties"
              className="btn btn-primary float-right"
            >
              <i className="fa fa-building" /> Total Properties 52
            </Link>

            {/* <!-- Add New Property --> */}
            <form>
              <div className="title text-center display-4 mb-4">
                Add New Property
              </div>

              <div className="basic-info">
                <strong className="text-muted">Basic information</strong>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="title..."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="price">Price $$</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="price..."
                    />
                  </div>
                  <div className="form-group  col-md-12">
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      placeholder="description..."
                    />
                  </div>
                </div>
              </div>

              <br />

              <div className="location">
                <strong className="text-muted">Location</strong>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputState">Country</label>
                  <select id="inputState" className="form-control">
                    <option defaultValue>Choose...</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" className="form-control" />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" name="zip" className="form-control" />
                  </div>
                </div>
              </div>

              <br />

              <div className="details">
                <strong className="text-muted">Details</strong>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="propertyType">Property Type</label>
                    <select name="propertyType" className="form-control">
                      <option>Apartment</option>
                      <option>Flat</option>
                      <option>House</option>
                      <option>Cottage</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="status">Status</label>
                    <select name="status" className="form-control">
                      <option>Rent</option>
                      <option>Sale</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="beds">Beds</label>
                    <input
                      type="text"
                      name="beds"
                      placeholder="beds..."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="baths">Baths</label>
                    <input
                      type="text"
                      name="baths"
                      placeholder="baths..."
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="area  ">
                      Area [m
                      <sup>2</sup>
                      ]:
                    </label>
                    <input
                      type="text"
                      name="area "
                      placeholder="area  ..."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="garage">Garages :</label>
                    <input
                      type="text"
                      name="garage"
                      placeholder="garages..."
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <br />

              <div className="features mb-5">
                <strong className="text-muted">Features</strong>
                <p className="mb-3" />

                <div className="form-row">
                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="airConditioning"
                      id="airConditioning"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="airConditioning"
                      id="airConditioning"
                    >
                      Air conditioning
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="bedding"
                      name="bedding"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="bedding"
                      id="bedding"
                    >
                      Bedding
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="heating"
                      id="heating"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="heating"
                      id="heating"
                    >
                      Heating
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck2"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck2"
                    >
                      Internet{" "}
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="microwave"
                      id="microwave"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="microwave"
                      id="microwave"
                    >
                      Microwave
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="smokingAllowed"
                      id="smokingAllowed"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="smokingAllowed"
                      id="smokingAllowed"
                    >
                      Smoking allowed
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="useOfPool"
                      id="useOfPool"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="useOfPool"
                      id="useOfPool"
                    >
                      Use of pool
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="toaster"
                      id="toaster"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="toaster"
                      id="toaster"
                    >
                      Toaster
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="HiFi"
                      id="HiFi"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="HiFi"
                      id="HiFi"
                    >
                      Hi-Fi
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox  col-md-4 offset-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="cableTV"
                      id="cableTV"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="cableTV"
                      id="cableTV"
                    >
                      Cable TV
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-block btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPropertyPage;
