import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import axios from "axios";
import { Spinner } from "reactstrap";

class GoogleMap extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.getList();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBEira93lQiKjRh_mEgt5JJWkc_g_1vGJM&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  //get all properties list
  getList = () => {
    axios
      .get("/api/property/all", {
        params: { currentPage: 1, pageSize: 10, selectedFilter: "all" }
      })
      .then(response => {
        this.setState(
          {
            list: response.data
          },
          this.renderMap()
        );
      });
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.60483, lng: -87.66769 },
      zoom: 3
    });

    //set info window
    const infoWindow = new window.google.maps.InfoWindow();

    // add all markers  for all properties
    this.state.list.map(item => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: parseFloat(item.mapLocation.lat),
          lng: parseFloat(item.mapLocation.lng)
        },
        map: map
      });

      marker.addListener("click", function() {
        infoWindow.setContent(`<div class="card" style="width: 18rem;">
        <img src=${item.imgUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-text mb-3">Address: ${item.address}</h6>
          <a href="/property-detail/${
            item._id
          }" class="btn btn-primary">View Details</a>
        </div>
      </div>`);
        infoWindow.open(map, marker);
      });
      return 0;
    });
  };

  render() {
    const { width, height } = this.props;
    let renderComponent;

    if (this.state.list.length > 0) {
      renderComponent = (
        <div id="map" className="mt-5" style={{ width, height }} />
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
      <div className="mt-5" style={{ width, height }}>
        {renderComponent}
      </div>
    );
  }
}

//loadscript function to load google script
function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

const mapStateToPropes = state => {
  return {
    properties: state.properties
  };
};

export default connect(
  mapStateToPropes,
  actions
)(GoogleMap);
