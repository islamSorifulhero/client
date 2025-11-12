import React, { useContext, useState } from "react";
import { AuthContext } from "../components/content/AuthProviders.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddIssue = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    photoURL: "",
    description: "",
    amount: "",
    email: user?.email || "",
    date: new Date().toISOString().split("T")[0],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!formData.photoURL || !formData.title || !formData.description || !formData.amount) {
      toast.error("⚠️ Please fill all required fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://clean-server-side.vercel.app/api/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        toast.success("✅ Issue added successfully!");
        navigate(`/add-contribution/${data.insertedId}`);
        setFormData({
          title: "",
          category: "",
          location: "",
          photoURL: "",
          description: "",
          amount: "",
          email: user?.email || "",
          date: new Date().toISOString().split("T")[0],
        });
      } else {
        toast.error("❌ Failed to add issue!");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Server Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-green-50 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
        Add New Issue
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Issue Title"
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (e.g. Garbage, Road, Drainage)"
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location (e.g. Mohakhali, Dhaka)"
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
          placeholder="Photo URL"
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the issue"
          className="w-full p-2 border rounded"
          rows="3"
          required
        />

        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Estimated Cleaning Cost"
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          readOnly
          className="w-full p-2 border rounded bg-gray-100 text-gray-600"
        />

        <input
          name="date"
          type="date"
          value={formData.date}
          readOnly
          className="w-full p-2 border rounded bg-gray-100 text-gray-600"
        />

        <button
          type="submit"
          className={`w-full py-2 rounded-lg text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Issue"}
        </button>
      </form>
    </div>
  );
};

export default AddIssue;
