import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../content/AuthProviders.jsx";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config.js";

const auth = getAuth(app);

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <nav className="bg-green-700 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer" onClick={() => navigate("/")}>
        CleanCity
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/all-issues"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          All Issues
        </NavLink>

        {user ? (
          <>
            <NavLink
              to="/add-issue"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Add Issue
            </NavLink>
            <NavLink
              to="/my-issues"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              My Issues
            </NavLink>
            <NavLink
              to="/my-contributions"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              My Contributions
            </NavLink>

            {/* Avatar dropdown */}
            <div className="relative">
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 rounded-full bg-white text-green-700 font-bold flex items-center justify-center cursor-pointer"
              >
                {user.displayName
                  ? user.displayName.charAt(0).toUpperCase()
                  : user.email.charAt(0).toUpperCase()}
              </div>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-green-700 rounded-lg shadow-lg z-10">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-green-100 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
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
