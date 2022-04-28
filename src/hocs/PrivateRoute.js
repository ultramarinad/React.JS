import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getHomeLink } from "../navigation/index";

export function PrivateRoute({ authenticated, ...rest }) {
  return authenticated ? <Route {...rest} /> : <Redirect to={getHomeLink()} />;
}
