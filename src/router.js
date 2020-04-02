import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//core pages
import Login from "./pages/login";
import MainContainer from "./pages/mainContainer";

const Routers = () => {
  return (
    <Router basename="login">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/mainDashboard" component={MainContainer} />
      </Switch>
    </Router>
  );
};

export default Routers;
