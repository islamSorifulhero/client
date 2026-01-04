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
    axios
      .get("https://clean-server-side.vercel.app/api/issues")
      .then((res) => {
        setIssues(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        Swal.fire("Error!", "Failed to fetch issues.", "error");
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
        <p className="text-green-700 dark:text-green-400 font-semibold animate-pulse">
          Loading issues...
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-green-700 dark:text-green-400">
        All Issues
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {issues.map((issue, index) => (
            <motion.div
              key={issue._id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="
                group
                bg-white dark:bg-slate-900
                hover:bg-green-50 dark:hover:bg-slate-800
                transition-all duration-300
                rounded-xl
                shadow
                dark:shadow-slate-900/50
                p-4
                flex flex-col
                border border-transparent dark:border-slate-800
              "
            >
              <img
                src={issue.image || issue.photoURL}
                alt={issue.title}
                className="h-40 w-full object-cover rounded-lg mb-3"
              />

              <h2
                className="
                  text-xl font-extrabold
                  text-green-700 dark:text-green-400
                  leading-tight
                  transition
                  group-hover:text-green-800 dark:group-hover:text-green-300
                "
              >
                {issue.title}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {issue.category} • {issue.location}
              </p>

              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm mb-4">
                {issue.description.length > 70
                  ? issue.description.slice(0, 70) + "..."
                  : issue.description}
              </p>

              <Link
                to={`/issue/${issue._id}`}
                className="
                  mt-auto
                  bg-green-700 hover:bg-green-600
                  dark:bg-green-600 dark:hover:bg-green-500
                  text-white
                  text-center
                  py-2
                  rounded-lg
                  font-semibold
                  transition
                "
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
