import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//core pages
import Login from "pages/login";
import MainContainer from "pages/mainContainer";
import NotFounds from "pages/404";

const Routers = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/mainDashboard" component={MainContainer} />
        <Route component={NotFounds} />
      </Switch>
    </Router>
  );
};

export default Routers;
