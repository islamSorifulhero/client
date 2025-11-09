import React, { useEffect, useState } from "react";

const AllIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const dummyData = [
      { id: 1, title: "Overflowing garbage on Road 21", category: "Garbage" },
      { id: 2, title: "Broken footpath near Gulshan Circle", category: "Infrastructure" },
    ];
    setIssues(dummyData);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-700 mb-4">All Issues</h2>
      {issues.length === 0 ? (
        <p>No issues found.</p>
      ) : (
        <ul className="space-y-3">
          {issues.map((issue) => (
            <li key={issue.id} className="p-4 bg-white rounded shadow">
              <p><strong>Title:</strong> {issue.title}</p>
              <p><strong>Category:</strong> {issue.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllIssues;
