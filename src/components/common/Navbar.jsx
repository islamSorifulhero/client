import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CleanCity</h1>
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/all-issues"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          All Issues
        </NavLink>
        <NavLink
          to="/add-issue"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          Add Issue
        </NavLink>
        <NavLink
          to="/my-issues"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          My Issues
        </NavLink>
        <NavLink
          to="/my-contributions"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          My Contributions
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
