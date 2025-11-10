import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../content/AuthProviders.jsx";

import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config.js";

const auth = getAuth(app);

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch(err => console.error(err));
  };

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CleanCity</h1>
      <div className="space-x-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "hover:underline")}>
          Home
        </NavLink>
        <NavLink
          to="/all-issues"
          className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
        >
          All Issues
        </NavLink>
        <NavLink
          to="/add-issue"
          className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
        >
          Add Issue
        </NavLink>
        <NavLink
          to="/my-issues"
          className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
        >
          My Issues
        </NavLink>
        <NavLink
          to="/my-contributions"
          className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
        >
          My Contributions
        </NavLink>

        {user ? (
          <>
            <span className="ml-4 font-semibold">{user.displayName || user.email}</span>
            <button
              onClick={handleLogout}
              className="ml-3 bg-red-600 px-3 py-1 rounded hover:bg-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
