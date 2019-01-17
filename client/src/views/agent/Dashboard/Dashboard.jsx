import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { NavLink, Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    name: "",
    about: "",
    email: "",
    mobile: "",
    skype: "",
    website: "",
    address: "",
    country: "",
    facebook: "",
    twitter: "",
    linkedin: ""
  };

  componentDidMount() {
    this.props.getProfile(this.props.auth.user.id);

    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.profile.profile !== this.props.profile.profile) {
  //     console.log(nextProps.profile.profile.data.user.name);

  //     const profile = nextProps.profile.profile.data;
  //     this.setState({
  //       name: profile.user.name,
  //       country: profile.country,
  //       address: profile.address,
  //       about: profile.about,
  //       email: profile.user.email,
  //       mobile: profile.mobile + "",
  //       skype: profile.skype,
  //       website: profile.website,
  //       facebook: profile.socialMedia.facebook,
  //       twitter: profile.socialMedia.twitter,
  //       linkedin: profile.socialMedia.linkedin
  //     });
  //   }
  // }

  onInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const updateProfileDetails = {
      ...this.state
    };

    this.props.updateProfile(updateProfileDetails);
  };

  render() {
    const { profile, loading } = this.props.profile;
    let renderContent;

    if (profile === null || loading) {
      renderContent = <p>loading...</p>;
    } else {
      renderContent = (
        <div className="m-auto col-lg-8 col-md-8 col-sm-12 pb-5  ">
          <div className="">
            <Link
              to="/agent/properties"
              className="btn btn-primary float-right"
            >
              <i className="fa fa-building" /> Total Properties 52
            </Link>
            <div className="display-4 my-5 text-center">Agent Profile</div>

            <form onSubmit={this.onFormSubmit}>
              <div className="row mt-5">
                {/* <!-- form left --> */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {/* <!-- Basic info --> */}
                  <div className="basic-info border border-dark p-3">
                    <strong className="text-muted">Basic info</strong>
                    <div className="form-group">
                      <label htmlFor="name">Name :</label>
                      <input
                        type="text"
                        className="form-control is-valid"
                        placeholder={profile.data.user.name}
                        onChange={this.onInputChange}
                        value={this.state.name}
                        name="name"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputState">Country</label>
                      <select
                        className="form-control"
                        onChange={this.onInputChange}
                        value={this.state.country}
                        name="country"
                      >
                        <option defaultValue>Choose...</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address :</label>
                      <textarea
                        className="form-control is-valid"
                        placeholder={profile.data.address}
                        onChange={this.onInputChange}
                        value={this.state.address}
                        name="address"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="about">About :</label>
                      <textarea
                        className="form-control is-valid"
                        placeholder={profile.data.about}
                        onChange={this.onInputChange}
                        value={this.state.about}
                        name="about"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  {/* <!-- Contact info --> */}
                  <div className="contact-info border border-dark p-3 mt-3">
                    <strong className="text-muted">Contact info</strong>

                    <div className="form-group">
                      <label htmlFor="email">Email :</label>
                      <input
                        type="email"
                        className="form-control is-valid"
                        onChange={this.onInputChange}
                        value={this.state.email}
                        name="email"
                        placeholder="email..."
                      />
                      <div className="valid-feedback">Password incorrect</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile:</label>
                      <input
                        type="text"
                        className="form-control is-valid"
                        placeholder="mobile no..."
                        onChange={this.onInputChange}
                        value={this.state.mobile}
                        name="mobile"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="skype">Skype:</label>
                      <input
                        type="text"
                        className="form-control is-valid"
                        placeholder="skype id..."
                        onChange={this.onInputChange}
                        value={this.state.skype}
                        name="skype"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="website">Website :</label>
                      <input
                        type="text"
                        className="form-control is-valid"
                        placeholder="website..."
                        onChange={this.onInputChange}
                        value={this.state.website}
                        name="website"
                      />
                      <div className="valid-feedback">Password incorrect</div>
                    </div>
                  </div>
                </div>
                {/* <!-- form right --> */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {/* <!-- Social media --> */}
                  <div className="contact-info border border-dark p-3">
                    <strong className="text-muted">Social accounts :</strong>

                    <div className="form-group">
                      <label htmlFor="faebook">Facebook :</label>
                      <input
                        type="text"
                        className="form-control is-valid"
                        placeholder="facebook profile url..."
                        onChange={this.onInputChange}
                        value={this.state.facebook}
                        name="facebook"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="twitter">Twitter :</label>
                      <input
                        type="text"
                        className="form-control is-valid"
                        placeholder="twitter profile link..."
                        onChange={this.onInputChange}
                        value={this.state.twitter}
                        name="twitter"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="linkedin">LinkedIn :</label>
                      <input
                        type="text"
                        className="form-control is-valid"
                        placeholder="linkedin profile link..."
                        onChange={this.onInputChange}
                        value={this.state.linkedin}
                        name="linkedin"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mx-3 mt-5"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      );
    }

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
              <Link
                to="/agent/properties"
                className="list-group-item list-group-item-action"
              >
                Properties
              </Link>
              <Link
                to="/agent/add-property"
                className="list-group-item list-group-item-action"
              >
                Add New
              </Link>
            </div>
          </div>

          {/* right section */}
          {renderContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors,
    auth: state.auth,
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
