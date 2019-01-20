import React from "react";

var markersList = [
  {
    coords: { lat: 26.2215, lng: 72.9992 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: `<div class="card" style="width: 18rem;">
      <img
        src="https://casaroyal.fantasythemes.net/wp-content/uploads/2018/12/chuttersnap-348307-unsplash-1-2.jpg"
        class="card-img-top "
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>

        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>`
  },
  {
    coords: { lat: 26.2153, lng: 73.0276 },
    content: `<div class="card" style="width: 18rem;">
      <img
        src="https://casaroyal.fantasythemes.net/wp-content/uploads/2018/12/chuttersnap-348307-unsplash-1-2.jpg"
        class="card-img-top "
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>

        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>`
  },
  {
    coords: { lat: 26.2284, lng: 73.045 },
    content: `<div class="card" style="width: 18rem;">
      <img
        src="https://casaroyal.fantasythemes.net/wp-content/uploads/2018/12/chuttersnap-348307-unsplash-1-2.jpg"
        class="card-img-top "
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>

        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>`
  }
];

class GoogleMap extends React.Component {
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBEira93lQiKjRh_mEgt5JJWkc_g_1vGJM&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 26.2153, lng: 73.0243 },
      zoom: 12
    });

    markersList.map(item => {
      const marker = new window.google.maps.Marker({
        position: { lat: item.coords.lat, lng: item.coords.lng },
        map: map
      });

      if (item.content) {
        const infoWindow = new window.google.maps.InfoWindow({
          content: item.content
        });

        marker.addListener("click", function() {
          infoWindow.open(map, marker);
        });
      }

      if (item.iconImage) {
        //Set icon image
        marker.setIcon(item.iconImage);
      }
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: `<div class="card" style="width: 18rem;">
      <img src="https://casaroyal.fantasythemes.net/wp-content/uploads/2018/12/chuttersnap-348307-unsplash-1-2.jpg" class="card-img-top " alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>

        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    });

    // marker.addListener("click", function() {
    //   infoWindow.open(map, marker);
    // });
    // marker2.addListener("click", function() {
    //   infoWindow.open(map, marker2);
    // });
  };

  componentDidMount() {
    this.renderMap();
  }

  render() {
    const { width, height } = this.props;

    return (
      <div
        id="map"
        className="googleMap mt-5"
        style={{ width, height, backgroundColor: "#bb02ff" }}
      />
    );
  }
}

function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default GoogleMap;
