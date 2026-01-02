import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";


const RecentIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get("https://clean-server-side.vercel.app/api/issues?limit=6")
      .then((res) => setIssues(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Recent Complaints</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <AnimatePresence>
          {issues.map((issue, index) => (
            <motion.div key={issue._id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}

              whileHover={{
                y: -10,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)"
              }}

              className="bg-white rounded shadow p-4 flex flex-col">

              <img src={issue.image || issue.photoURL} alt={issue.title} className="h-40 w-full object-cover rounded mb-2" />
              <h2 className="text-lg font-semibold">{issue.title}</h2>

              <p className="text-sm text-gray-500">{issue.category} | {issue.location}</p>

              <p className="mt-1 text-gray-700 mb-2 text-sm">
                {issue.description.length > 60 ? issue.description.slice(0, 60) + "..." : issue.description}
              </p>

              <Link
                to={`/issue/${issue._id}`}
                className="mt-auto bg-green-700 text-white text-center py-2 rounded hover:bg-green-600"
              >
                See Details
              </Link>
            </motion.div>


          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RecentIssues;