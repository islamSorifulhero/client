import React, { useContext, useState, } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/content/AuthProviders.jsx";

const AddContribution = () => {
  const { user } = useContext(AuthContext);
  const { issueId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    issueId: issueId || "",
    amount: "",
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    additionalInfo: "",
    date: new Date().toISOString(),
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch("https://clean-server-side.vercel.app/api/contributions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Contribution added successfully!");
        navigate("/my-contributions");
      } else {
        alert("❌ Failed to add contribution!");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server Error!");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-green-50 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
        Add Contribution
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Contribution Amount"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
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
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
        />
        <input
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Additional Info (optional)"
          className="w-full p-2 border rounded"
          rows="3"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
        >
          Submit Contribution
        </button>
      </form>
    </div>
  );
};

export default AddContribution;
