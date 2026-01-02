import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";


const AllIssues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://clean-server-side.vercel.app/api/issues")
      .then(res => {
        setIssues(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        Swal.fire("Error!", "Failed to fetch data.", "error");
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] space-y-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-green-200 border-t-green-700 rounded-full"
        />
        <p className="text-green-700 font-semibold animate-pulse">Loading Issues...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">All Issues</h1>

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

export default AllIssues;
