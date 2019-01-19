import React from "react";
import { Link } from "react-router-dom";
import { Popup } from "../../../components";

class PropertyPageUI extends React.Component {
  render() {
    const { dataList, deleteProperty } = this.props;
    return (
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
                {dataList.map(property => {
                  return (
                    <tr key={property._id}>
                      <td>
                        <p>{property.title}</p>
                        <img
                          src="https://placeimg.com/80/80/nature"
                          className=" img-thumbnail border-0"
                          alt=""
                        />
                      </td>

                      <td>{property.address}</td>
                      <td>{property.price}</td>
                      <td>
                        <div className="w-75 d-flex justify-content-around   ">
                          <Link
                            to={`/agent/edit-property/${property._id}`}
                            className="btn btn-primary"
                          >
                            <i className="fa fa-edit" /> Edit
                          </Link>

                          <Popup
                            buttonLabel="delete"
                            modelTitle={`${property.title}`}
                            deleteProperty={deleteProperty}
                            id={property._id}
                          />

                          <Link
                            target="_blank"
                            to={`/property-detail/${property._id}`}
                            className="btn btn-success"
                          >
                            <i className="fa fa-eye" /> View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <!--end of .table-responsive--> */}
        </div>
      </div>
    );
  }
}

export default PropertyPageUI;
