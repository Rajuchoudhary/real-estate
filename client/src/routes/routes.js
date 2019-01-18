import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  PropertyListPage,
  PropertyDetailPage
} from "../views/common";
import { RegistrationPage, LoginPage } from "../views/visitor";
import { AddPropertyPage, Dashboard, PropertyPage } from "../views/agent";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Home" component={HomePage} />
        <Route path="/agent/dashboard" component={Dashboard} />
        <Route path="/agent/properties" component={PropertyPage} />
        <Route path="/properties-list" component={PropertyListPage} />
        <Route path="/property-detail/:id" component={PropertyDetailPage} />
        <Route path="/agent/add-property" component={AddPropertyPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default Routes;
