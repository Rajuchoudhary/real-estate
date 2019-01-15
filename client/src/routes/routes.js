import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage, NotFoundPage } from "../views/common";
import { RegistrationPage, LoginPage } from "../views/visitor";
import { Dashboard } from "../views/agent";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Home" component={HomePage} />
        <Route path="/agent/dashboard" component={Dashboard} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default Routes;
