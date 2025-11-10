import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
