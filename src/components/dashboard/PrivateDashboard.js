import React from "react";
import { useState } from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateDashboard = ({ children, ...rest }) => {
  const [user, setUser] = useState(false);

  const handleLogin = () => {
    setUser(true);
  };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateDashboard;
