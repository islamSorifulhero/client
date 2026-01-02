import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../content/AuthProviders.jsx";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config.js";

const auth = getAuth(app);

const Navbar = ({ toggleTheme, darkMode }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigate("/login"))
      .catch(err => console.error(err));
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/all-issues", label: "All Issues" },
    { path: "/add-issue", label: "Add Issue", private: true },
    { path: "/my-issues", label: "My Issues", private: true },
    { path: "/my-contributions", label: "My Contributions", private: true },
  ];

  return (
    <nav className="bg-green-800 text-white px-6 py-6 flex justify-between items-center relative">
      <h1 onClick={() => navigate("/")} className="text-2xl font-bold cursor-pointer italic">Clean<span className="text-green-400">City</span></h1>

      <div className="hidden md:flex space-x-5 items-center">
        {navLinks.map(link => (!link.private || user) && (
          <NavLink key={link.path} to={link.path} className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>
            {link.label}
          </NavLink>
        ))}

        {!user ? (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? "underline" : "hover:underline"}>Login</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? "underline" : "hover:underline"}>Register</NavLink>
          </>
        ) : (
          <div className="relative">
            <img src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="User Avatar" onClick={() => setDropdownOpen(!dropdownOpen)} className="w-9 h-9 rounded-full cursor-pointer border-2 border-white"/>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-36 text-center">
                <p className="px-2 py-1 border-b text-sm font-semibold truncate">{user.displayName || user.email}</p>
                <button onClick={handleLogout} className="block w-full px-3 py-2 hover:bg-green-100 text-red-600">Logout</button>
              </div>
            )}
          </div>
        )}

        {/* Dark/Light Mode Toggle */}
        <button onClick={toggleTheme} className="ml-4 px-4 py-2 bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 rounded transition duration-300">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Mobile menu toggle */}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-800 text-white flex flex-col space-y-3 py-4 px-6 md:hidden z-10">
          {navLinks.map(link => (!link.private || user) && (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"} onClick={() => setMenuOpen(false)}>{link.label}</NavLink>
          ))}

          {!user ? (
            <>
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
              <NavLink to="/register" onClick={() => setMenuOpen(false)}>Register</NavLink>
            </>
          ) : (
            <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="text-red-400 text-left">Logout</button>
          )}

          {/* Dark/Light Toggle */}
          <button onClick={toggleTheme} className="px-4 py-2 bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 rounded transition duration-300">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
