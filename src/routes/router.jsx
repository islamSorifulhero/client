import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
// import Home from "../component/pages/Home.jsx";
import AllIssues from "../pages/AllIssues.jsx";
import AddIssue from "../pages/AddIssue.jsx";
import MyIssues from "../pages/MyIssues.jsx";
import MyContributions from "../pages/MyContributions.jsx";
import Home from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-issues", element: <AllIssues /> },
      { path: "/add-issue", element: <AddIssue /> },
      { path: "/my-issues", element: <MyIssues /> },
      { path: "/my-contributions", element: <MyContributions /> },
    ],
  },
]);

export default router;
