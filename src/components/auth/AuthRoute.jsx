import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user } = useSelector((state) => state.users);
  console.log("auth", user);
  return user?._id ? (
    children
  ) : (
    <Navigate
      to="/signin"
      state={{
        from: { location },
      }}
    />
  );
};

export default AuthRoute;
