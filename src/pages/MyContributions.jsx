import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/content/AuthProviders";

const MyContributions = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://clean-server-side.vercel.app/api/my-contributions/?email=${user.email}`)
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

  const handleDownloadPDF = () => {
    if (user?.email) {
      window.open(
        `https://clean-server-side.vercel.app/api/download-pdf/${user.email}`,
        "_blank"
      );
    }
  };

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
        <>
          <div className="flex justify-end mb-3">
            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              📄 Download PDF
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="py-2 px-4 text-left">Issue Title</th>
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Paid Amount</th>
                  <th className="py-2 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {contributions.map((item) => (
                  <tr key={item._id} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-4">{item.issueTitle || "Unknown Issue"}</td>
                    <td className="py-2 px-4">{item.category || "N/A"}</td>
                    <td className="py-2 px-4">৳{item.amount}</td>
                    <td className="py-2 px-4">
                      {new Date(item.date).toLocaleDateString("en-GB")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyContributions;
