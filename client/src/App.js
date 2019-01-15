import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Header, Footer } from "./components/";
import Routes from "./routes/routes";

class App extends Component {
  state = {
    serverPort: ""
  };

  async componentDidMount() {
    const data = await axios.get("/");
    console.log(data);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Routes />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
