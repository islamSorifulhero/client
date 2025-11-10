import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/content/AuthProviders";

const MyContributions = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/api/my-contributions/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setContributions(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading contributions:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading || authLoading) {
    return <p className="text-center mt-6">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        My Contributions
      </h2>

      {contributions.length === 0 ? (
        <p className="text-center text-gray-500">
          No contributions found for your account.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {contributions.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-white border rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="font-semibold text-green-700 mb-1">
                💧 Issue ID: <span className="text-gray-700">{item.issueId}</span>
              </p>
              <p className="mb-1">
                💰 <strong>Amount:</strong> ৳{item.amount}
              </p>
              <p className="mb-1">
                📅 <strong>Date:</strong>{" "}
                {new Date(item.date).toLocaleDateString("en-GB")}
              </p>
              <p className="text-sm text-gray-600">
                📝 {item.additionalInfo || "No additional note"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyContributions;
