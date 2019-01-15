import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    serverPort: ""
  };

  async componentDidMount() {
    const data = await axios.get("localhost:5000");
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>Real estate web app</h1>
      </div>
    );
  }
}

export default App;
