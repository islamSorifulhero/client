import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/content/AuthProviders.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
