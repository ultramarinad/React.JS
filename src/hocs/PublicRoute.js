import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getChatsLink } from "../navigation/index";

export function PublicRoute({ authenticated, ...rest }) {
  return !authenticated ? (
    <Route {...rest} />
  ) : (
    <Redirect to={getChatsLink()} />
  );
}
