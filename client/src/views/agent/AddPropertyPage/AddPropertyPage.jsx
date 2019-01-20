import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Input, TextArea, SelectList, CheckBox } from "../../../components/";
import validatePropertyInput from "../../../validation/validatePropertyInput";
import { AgentMenu } from "..";

class AddPropertyPage extends Component {
  state = {
    title: "",
    price: "",
    description: "",
    address: "",
    lat: "",
    lng: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    propertyType: "",
    status: "",
    beds: "",
    baths: "",
    area: "",
    garages: "",
    ac: "",
    gym: "",
    bar: "",
    internet: "",
    microwave: "",
    smoking: "",
    fireplace: "",
    toaster: "",
    tennis: "",
    tv: "",
    loading: false,
    errors: {}
  };

  handleInputChange = ({ currentTarget }) => {
    const value =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;

    this.setState({
      [currentTarget.name]: value
    });
  };
  onFormSubmit = e => {
    e.preventDefault();

    const propertyDetails = {
      title: this.state.title,
      price: this.state.price,
      description: this.state.description,
      address: this.state.address,
      lat: this.state.lat,
      lng: this.state.lng,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      propertyType: this.state.propertyType,
      status: this.state.status,
      beds: this.state.beds,
      baths: this.state.baths,
      area: this.state.area,
      garages: this.state.garages,
      ac: this.state.ac,
      gym: this.state.gym,
      bar: this.state.bar,
      internet: this.state.internet,
      microwave: this.state.microwave,
      smoking: this.state.smoking,
      fireplace: this.state.fireplace,
      toaster: this.state.toaster,
      tennis: this.state.tennis,
      tv: this.state.tv
    };

    console.log(propertyDetails);
    console.log(validatePropertyInput(propertyDetails));
    if (validatePropertyInput(propertyDetails).isValid) {
      this.props.addProperty(propertyDetails);
    }
  };

  startWithNonZero = e => {
    const price = e.currentTarget.value;

    if (isNaN(price) || price === "0") {
      e.currentTarget.value = "";
    }

    if (price) {
    }
  };
  numbersOnly = e => {
    const price = e.currentTarget.value;

    if (isNaN(price)) {
      e.currentTarget.value = "";
    }

    if (price) {
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.property.property) {
    }
  }

  render() {
    const options = [
      { label: "Select...", value: "" },
      { label: "India", value: "india" },
      { label: "USA", value: "usa" },
      { label: "UK", value: "uk" }
    ];
    const propertyType = [
      { label: "Select...", value: "" },
      { label: "Apartment", value: "apartment" },
      { label: "Flat", value: "flat" },
      { label: "House", value: "house" },
      { label: "Cottage", value: "cottage" }
    ];

    const propertyStatus = [
      { label: "Select...", value: "" },
      { label: "Rent", value: "rent" },
      { label: "Sale", value: "sale" }
    ];
    return (
      <div className="container-fluid">
        <div className="row">
          {/* left section */}
          <AgentMenu />
          {/* <!-- right section --> */}
          <div className="m-auto col-lg-8 col-md-8 col-sm-12  p-2">
            {/* <!-- Add New Property --> */}
            <div className="title text-center display-4 mb-4">
              Add New Property
            </div>
            <form onSubmit={this.onFormSubmit}>
              <div className="basic-info">
                <strong className="text-muted">Basic information</strong>
                <div className="form-row">
                  <Input
                    classes="col-md-6"
                    label="Title"
                    name="title"
                    placeholder="property title..."
                    onChange={this.handleInputChange}
                    value={this.state.title}
                  />

                  <Input
                    classes="col-md-6"
                    label="Price $$"
                    name="price"
                    placeholder="price..."
                    onChange={this.handleInputChange}
                    value={this.state.price}
                    validate={this.startWithNonZero}
                  />

                  <TextArea
                    classes="col-md-12"
                    label="Description"
                    name="description"
                    placeholder="description..."
                    onChange={this.handleInputChange}
                    value={this.state.description}
                  />
                </div>
              </div>

              <br />

              <div>
                <strong className="text-muted">Location</strong>
                <a
                  className="bg-primary text-white ml-3 px-2"
                  href="https://www.latlong.net/"
                  target="_blank"
                >
                  lat, lng <i className=" fa fa-question-circle" />
                </a>
                <div className="form-row">
                  <Input
                    classes="col-md-8"
                    label="Address"
                    name="address"
                    placeholder="1234 Main St..."
                    onChange={this.handleInputChange}
                    value={this.state.address}
                  />

                  <Input
                    classes="col-md-2"
                    label="Latitude"
                    name="lat"
                    placeholder="latitude..."
                    onChange={this.handleInputChange}
                    value={this.state.lat}
                  />
                  <Input
                    classes="col-md-2"
                    label="Longitude "
                    name="lng"
                    placeholder="longitude ..."
                    onChange={this.handleInputChange}
                    value={this.state.lng}
                  />
                </div>

                <SelectList
                  label="Country"
                  name="country"
                  options={options}
                  onChange={this.handleInputChange}
                  value={this.state.country}
                />

                <div className="form-row">
                  <Input
                    classes="col-md-6"
                    label="State"
                    name="state"
                    placeholder="state..."
                    onChange={this.handleInputChange}
                    value={this.state.state}
                  />
                  <Input
                    classes="col-md-4"
                    label="City"
                    name="city"
                    placeholder="city..."
                    onChange={this.handleInputChange}
                    value={this.state.city}
                  />
                  <Input
                    classes="col-md-2"
                    label="Zip"
                    name="zip"
                    placeholder="zip..."
                    onChange={this.handleInputChange}
                    value={this.state.zip}
                    validate={this.numbersOnly}
                  />
                </div>
              </div>

              <br />

              <div className="details">
                <strong className="text-muted">Details</strong>
                <div className="form-row">
                  <SelectList
                    classes="col-md-6"
                    options={propertyType}
                    label="Property Type"
                    name="propertyType"
                    onChange={this.handleInputChange}
                    value={this.state.propertyType}
                  />

                  <SelectList
                    classes="col-md-6"
                    options={propertyStatus}
                    label="Status"
                    name="status"
                    onChange={this.handleInputChange}
                    value={this.state.status}
                  />
                </div>

                <div className="form-row">
                  <Input
                    classes="col-md-6"
                    label="Beds"
                    name="beds"
                    placeholder="beds..."
                    onChange={this.handleInputChange}
                    value={this.state.beds}
                    validate={this.numbersOnly}
                  />

                  <Input
                    classes="col-md-6"
                    label="Baths"
                    name="baths"
                    placeholder="baths..."
                    onChange={this.handleInputChange}
                    value={this.state.baths}
                    validate={this.numbersOnly}
                  />
                </div>

                <div className="form-row">
                  <Input
                    classes="col-md-6"
                    label="Area m2"
                    name="area"
                    placeholder="area..."
                    onChange={this.handleInputChange}
                    value={this.state.area}
                    validate={this.numbersOnly}
                  />

                  <Input
                    classes="col-md-6"
                    label="Garages"
                    name="garages"
                    placeholder="garage..."
                    onChange={this.handleInputChange}
                    value={this.state.garages}
                    validate={this.numbersOnly}
                  />
                </div>
              </div>

              <br />

              <div className="features mb-5">
                <strong className="text-muted">Features</strong>
                <p className="mb-3" />

                <div className="form-row">
                  <CheckBox
                    name="ac"
                    label="Air conditioning"
                    onChange={this.handleInputChange}
                    checked={this.state.ac}
                  />

                  <CheckBox
                    name="gym"
                    label="Gym"
                    onChange={this.handleInputChange}
                    checked={this.state.gym}
                  />
                </div>
                <div className="form-row">
                  <CheckBox
                    name="bar"
                    label="Bar"
                    onChange={this.handleInputChange}
                    checked={this.state.bar}
                  />

                  <CheckBox
                    name="internet"
                    label="Internet"
                    onChange={this.handleInputChange}
                    checked={this.state.internet}
                  />
                </div>

                <div className="form-row">
                  <CheckBox
                    name="microwave"
                    label="Microwave"
                    onChange={this.handleInputChange}
                    checked={this.state.microwave}
                  />

                  <CheckBox
                    name="smoking"
                    label="Smoking allowed"
                    onChange={this.handleInputChange}
                    checked={this.state.smoking}
                  />
                </div>

                <div className="form-row">
                  <CheckBox
                    name="fireplace"
                    label="Fireplace or fire pit"
                    onChange={this.handleInputChange}
                    checked={this.state.fireplace}
                  />

                  <CheckBox
                    name="toaster"
                    label="Toaster"
                    onChange={this.handleInputChange}
                    checked={this.state.toaster}
                  />
                </div>

                <div className="form-row">
                  <CheckBox
                    name="tennis"
                    label="Tennis Courts"
                    onChange={this.handleInputChange}
                    checked={this.state.tennis}
                  />

                  <CheckBox
                    name="tv"
                    label="Cable TV"
                    onChange={this.handleInputChange}
                    checked={this.state.tv}
                  />
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

const mapStateToProps = state => {
  return {
    errors: state.errors,
    property: state.property
  };
};

export default connect(
  mapStateToProps,
  actions
)(AddPropertyPage);
