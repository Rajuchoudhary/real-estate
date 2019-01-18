import React from "react";

class GoogleMap extends React.Component {
  render() {
    const { width, height } = this.props;

    return (
      <div
        className="googleMap mt-5"
        style={{ width, height, backgroundColor: "#bb02ff" }}
      />
    );
  }
}

export default GoogleMap;
