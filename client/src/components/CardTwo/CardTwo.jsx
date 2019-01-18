import React from "react";

import { Link } from "react-router-dom";

class CardTwo extends React.Component {
  render() {
    const {
      agentId,
      agentName,
      tag,
      img,
      address,
      price,
      text,
      propertyId,
      area,
      beds,
      baths,
      garages
    } = this.props;
    let tagColor = tag === "rent" ? "warning" : "success";
    return (
      <React.Fragment>
        <div className="row">
          <div className="row shadow-sm border p-4 mb-3">
            <div className="col-lg-4 col-md-4 col-sm-8">
              <span className={`badge badge-${tagColor}`}>{tag}</span>
              <img className="card-img-top" src={img} alt="Card cap" />
            </div>
            <div className="col-lg-8 col-md-8  col-sm-8">
              <strong>Address:</strong>
              <Link
                to={`/agent-profile/${agentId}`}
                className="float-right badge badge-primary p-2"
              >
                Agent: {agentName}
              </Link>
              <br />
              <small className="text-muted">{address}</small>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <span className="badge badge-success">Price: ${price}</span>
                  <br />
                  <p className="my-3">{text}</p>
                  <Link
                    to={`/property-detail/${propertyId}`}
                    className="btn btn-primary"
                  >
                    Visit Property
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Area:{" "}
                      <span className="badge badge-secondary float-right">
                        {area} m<sup>2</sup>
                      </span>
                    </li>
                    <li className="list-group-item">
                      Beds:{" "}
                      <span className="badge badge-secondary float-right">
                        {beds}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Baths:{" "}
                      <span className="badge badge-secondary float-right">
                        {baths}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Garages:
                      <span className="badge badge-secondary float-right">
                        {garages}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardTwo;
