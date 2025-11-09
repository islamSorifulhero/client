import React, { useEffect, useState } from "react";

const MyContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    
    const dummyContributions = [
      { id: 1, issueId: 1, amount: 200 },
      { id: 2, issueId: 2, amount: 350 },
    ];
    setContributions(dummyContributions);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">My Contributions</h2>
      {contributions.length === 0 ? (
        <p>No contributions found.</p>
      ) : (
        <ul className="space-y-3">
          {contributions.map((item) => (
            <li key={item.id} className="p-3 bg-white rounded shadow">
              <p><strong>Issue ID:</strong> {item.issueId}</p>
              <p><strong>Amount:</strong> ৳{item.amount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyContributions;
