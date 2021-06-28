import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Gallery } from "./pages";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categoria/:id" component={Gallery} />
      </Switch>
    </Router>
  );
}
