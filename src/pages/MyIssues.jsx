import React, { useEffect, useState } from "react";

const MyIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {

    const myDummyIssues = [
      { id: 1, title: "Overflowing garbage on Road 21", status: "Ongoing" },
      { id: 2, title: "Broken footpath near Gulshan Circle", status: "Completed" },
    ];
    setIssues(myDummyIssues);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">My Issues</h2>
      {issues.length === 0 ? (
        <p>No issues reported yet.</p>
      ) : (
        <ul className="space-y-3">
          {issues.map((issue) => (
            <li key={issue.id} className="p-3 bg-white rounded shadow">
              <p><strong>Title:</strong> {issue.title}</p>
              <p><strong>Status:</strong> {issue.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyIssues;
