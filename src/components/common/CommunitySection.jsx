import React, { useEffect, useState } from "react";
import axios from "axios";

const CommunitySection = () => {
  const [stats, setStats] = useState({ users: 0, resolved: 0, pending: 0 });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/community-stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-10 bg-green-50 p-6 rounded shadow text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Community Stats</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded shadow p-4">
          <p className="text-xl font-bold">{stats.users}</p>
          <p className="text-gray-600">Registered Users</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <p className="text-xl font-bold">{stats.resolved}</p>
          <p className="text-gray-600">Issues Resolved</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <p className="text-xl font-bold">{stats.pending}</p>
          <p className="text-gray-600">Pending Issues</p>
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-600">
          Join Clean Drive
        </button>
      </div>
    </div>
  );
};

export default CommunitySection;
