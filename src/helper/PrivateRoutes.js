import React from "react";

import { Route, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../helper/ApiCall";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : navigate("/home")
      }
    />
  );
};

export default PrivateRoute;
