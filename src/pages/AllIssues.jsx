// src/pages/AllIssues.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/issues")
      .then(res => setIssues(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">All Issues</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {issues.map(issue => (
          <div key={issue._id} className="bg-white rounded shadow p-4 flex flex-col">
            <img src={issue.image} alt={issue.title} className="h-40 w-full object-cover rounded mb-2" />
            <h2 className="text-lg font-semibold">{issue.title}</h2>
            <p className="text-sm text-gray-500">{issue.category} | {issue.location}</p>
            <p className="mt-1 font-bold">৳{issue.amount}</p>
            <Link
              to={`/issue/${issue._id}`}
              className="mt-auto bg-green-700 text-white text-center py-2 rounded hover:bg-green-600"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllIssues;
