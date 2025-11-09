// src/components/common/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">CleanCity</div>
      <div className="space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>
          Home
        </NavLink>
        <NavLink to="/all-issues" className={({ isActive }) => isActive ? "underline" : ""}>
          All Issues
        </NavLink>
        <NavLink to="/add-issue" className={({ isActive }) => isActive ? "underline" : ""}>
          Add Issue
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
