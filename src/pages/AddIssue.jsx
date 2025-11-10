import React, { useContext, useState } from "react";
import { AuthContext } from "../components/content/AuthProviders.jsx";

const AddIssue = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
    amount: "",
    email: user?.email || "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Issue added successfully!");
        setFormData({
          title: "",
          category: "",
          location: "",
          description: "",
          amount: "",
          email: user?.email || "",
          date: new Date().toISOString().split("T")[0],
        });
      } else {
        alert("❌ Failed to add issue!");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server Error!");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-green-50 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Add New Issue</h2>

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

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the issue"
          className="w-full p-2 border rounded"
          rows="3"
          required
        ></textarea>

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
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default AddIssue;
