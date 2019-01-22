import React from "react";

class AgentProfileUI extends React.Component {
  render() {
    const { name, email } = this.props.profileData.user;
    const { about, mobile, skype, socialMedia } = this.props.profileData;

    let renderContent;

    if (Object.keys(this.props.profileData).length > 0) {
      renderContent = (
        <div className="agent-profile my-5 ">
          <div className="d-flex flex-row border rounded">
            <div className="p-0 w-25">
              <img
                src="http://themestarz.net/html/zoner/assets/img/agent-01.jpg"
                className="img-thumbnail border-0"
                alt=""
              />
            </div>
            <div className="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
              <h5 className="name text-success">
                {name}
                <span className=" float-right m-auto badge badge-dark">
                  <i className="fa fa-home" />
                  Total Properties: {this.props.totalCount}
                </span>
              </h5>
              <p>{about}</p>
              <ul className="small agent-details list-group">
                <h5 className="text-muted ">Contact Details</h5>
                <li className="list-group-item">
                  Phone: <span className="float-right">(123) 456 789</span>
                </li>
                <li className="list-group-item">
                  Mobile: <span className="float-right">{mobile}</span>
                </li>
                <li className="list-group-item">
                  Email: <span className="float-right">{email}</span>
                </li>
                <li className="list-group-item">
                  Skype: <span className="float-right">{skype}</span>
                </li>

                <li className="list-group-item">
                  My Social Profiles:
                  <span className="">
                    <ul className="mt-3 small agent-details list-group">
                      <li className="list-group-item">
                        FaceBook:
                        <span className="float-right">
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={
                              socialMedia.facebook === ""
                                ? "http://www.facebook.com"
                                : socialMedia.facebook
                            }
                            className="btn btn-primary"
                          >
                            <i className="fa fa-facebook-f" />
                          </a>
                        </span>
                      </li>
                      <li className="list-group-item">
                        Twitter:
                        <span className="float-right">
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={
                              socialMedia.twitter === ""
                                ? "http://www.twitter.com"
                                : socialMedia.twitter
                            }
                            className="btn btn-sm btn-primary"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                        </span>
                      </li>
                      <li className="list-group-item">
                        LinkedIn:
                        <span className="float-right">
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={
                              socialMedia.linkedin === ""
                                ? "http://www.linkedin.com"
                                : socialMedia.linkedin
                            }
                            className="btn btn-sm btn-primary"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </span>
                      </li>
                    </ul>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col">
          <h1 className="display-4 my-5 text-center">Agent Profile:</h1>
          {renderContent}
        </div>
      </div>
    );
  }
}
export default AgentProfileUI;
