import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import ListTripsPage from "../ListTripsPage";
import CreateTripPage from "../CreateTripPage";
import TripDetailsPage from "../TripDetailsPage";
import ApplicationForm from "../ApplicationForm";



export const routes = {
  root: "/",
  login: "/login",
  applicationForm: "/application-form",
  tripsCreate: "/trips/create",
  tripsList: "/trips/list",
  tripsDetails: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.tripsCreate} component={CreateTripPage} />
        <Route exact path={routes.tripsList} component={ListTripsPage} />
        <Route exact path={routes.tripsDetails} component={TripDetailsPage} />
        <Route exact path={routes.applicationForm} component={ApplicationForm}/>
        
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
