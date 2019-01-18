import React from "react";
import { Link } from "react-router-dom";
import "./CardOneStyle.css";

class CardOne extends React.Component {
  render() {
    const {
      img,
      title,
      price,
      area,
      beds,
      baths,
      garages,
      propertyId,
      btnText
    } = this.props;

    return (
      <div
        className="card shadow-lg"
        style={{
          width: "340px"
        }}
      >
        <img
          className="card-img-top"
          style={{ width: "100%", height: "100%" }}
          src={img}
          alt="Property"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="float-right badge badge-success">
              Price: ${price}
            </span>
          </h5>

          <div className="card-text">
            <ul className="list-group">
              <li className="list-group-item">
                Area:
                <span className="badge badge-secondary float-right">
                  {area} m<sup>2</sup>
                </span>
              </li>
              <li className="list-group-item">
                Beds:
                <span className="badge badge-secondary float-right">
                  {beds}
                </span>
              </li>
              <li className="list-group-item">
                Baths:
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
          <Link
            to={`/property-detail/${propertyId}`}
            className="btn btn-primary mt-3"
          >
            {btnText}
          </Link>
        </div>
      </div>
    );
  }
}

export default CardOne;
