// src/component/pages/MyIssues.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyIssues = () => {
  const [issues, setIssues] = useState([]);
  const [email, setEmail] = useState(""); // you can later replace with logged-in user email

  useEffect(() => {
    // example static email (replace later with actual logged user)
    const userEmail = "user@mail.com";
    setEmail(userEmail);

    axios
      .get(`http://localhost:5000/api/issues?email=${userEmail}`)
      .then(res => setIssues(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">My Reported Issues</h1>
      {issues.length === 0 ? (
        <p>No issues reported yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {issues.map(issue => (
            <div key={issue._id} className="bg-white rounded shadow p-4">
              <img src={issue.image} alt={issue.title} className="h-40 w-full object-cover rounded mb-2" />
              <h2 className="text-lg font-semibold">{issue.title}</h2>
              <p className="text-sm text-gray-500">{issue.category} | {issue.location}</p>
              <p className="mt-1 font-bold">৳{issue.amount}</p>
              <p className="text-xs text-gray-500 mt-1">Date: {new Date(issue.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyIssues;
