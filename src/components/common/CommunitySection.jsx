import React, { useEffect, useState } from "react";
import axios from "axios";

const CommunitySection = () => {
  const [stats, setStats] = useState({
    users: 0,
    resolved: 0,
    pending: 0,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/stats")
      .then((res) => {
        setStats({
          users: res.data.totalUsers,
          resolved: res.data.issuesResolved,
          pending: res.data.issuesPending,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-12">Community Impact</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
            <span className="text-5xl font-bold text-green-600">{stats.users}</span>
            <p className="mt-2 text-gray-600 font-semibold">Registered Users</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
            <span className="text-5xl font-bold text-green-600">{stats.resolved}</span>
            <p className="mt-2 text-gray-600 font-semibold">Issues Resolved</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
            <span className="text-5xl font-bold text-green-600">{stats.pending}</span>
            <p className="mt-2 text-gray-600 font-semibold">Pending Issues</p>
          </div>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition duration-300">
          Join Clean Drive 
        </button>
      </div>
    </section>
  );
};

export default CommunitySection;
