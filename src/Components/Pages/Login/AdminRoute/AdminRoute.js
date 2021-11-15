import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { allContexts } = useAuth();
  const { user, admin, isLoading } = allContexts;
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
