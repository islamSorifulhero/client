// src/layout/Root.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
