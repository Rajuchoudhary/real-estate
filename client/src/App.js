import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components/";
import Routes from "./routes/routes";

class App extends Component {
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
