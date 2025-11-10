import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import Home from "../pages/Home.jsx";
import AllIssues from "../pages/AllIssues.jsx";
import AddIssue from "../pages/AddIssue.jsx";
import MyIssues from "../pages/MyIssues.jsx";
import MyContributions from "../pages/MyContributions.jsx";
import IssueDetails from "../pages/IssueDetails.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-issues", element: <AllIssues /> },
      { path: "/add-issue", element: <PrivateRoute><AddIssue /></PrivateRoute> },
      { path: "/my-issues", element: <PrivateRoute><MyIssues /></PrivateRoute> },
      { path: "/my-contributions", element: <PrivateRoute><MyContributions /></PrivateRoute> },
      { path: "/issue/:id", element: <PrivateRoute><IssueDetails /></PrivateRoute> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
