import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import AllIssues from "../pages/AllIssues.jsx";
import AddIssue from "../pages/AddIssue.jsx";
import MyIssues from "../pages/MyIssues.jsx";
import MyContributions from "../pages/MyContributions.jsx";
import Home from "../pages/Home.jsx";
import IssueDetails from "../pages/IssueDetails.jsx";

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
      { path: "/issue/:id", element: <IssueDetails></IssueDetails>}
    ],
  },
]);

export default router;
