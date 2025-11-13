import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CommunitySection = () => {
  const [stats, setStats] = useState({
    users: 0,
    resolved: 0,
    pending: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://clean-server-side.vercel.app/api/community-stats")
      .then((res) => {
        setStats({
          users: res.data.totalUsers,
          resolved: res.data.issuesResolved,
          pending: res.data.issuesPending,
        });
      })
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-12">
          🌍 Community Impact & Stats
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
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

        <div className="bg-green-600 text-white py-10 px-6 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Clean Drive Initiative
          </h3>
          <p className="text-lg mb-6">
            Be a part of the community making our city greener and cleaner. 
            Join as a volunteer and take part in local cleanliness campaigns.
          </p>
          <button
            onClick={() => navigate("/volunteer-register")}
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-100 transition"
          >
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
