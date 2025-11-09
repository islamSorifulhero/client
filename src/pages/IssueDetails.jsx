import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const IssueDetails = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);
  const [contributions, setContributions] = useState([]);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("user1@mail.com");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/issues/${id}`)
      .then(res => setIssue(res.data))
      .catch(err => console.error(err));

    axios.get(`http://localhost:5000/api/contributions/${id}`)
      .then(res => setContributions(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleContribution = () => {
    const data = {
      issueId: id,
      amount,
      name,
      email,
      phone,
      address,
      date: new Date()
    };

    axios.post("http://localhost:5000/api/contributions", data)
      .then(res => {
        alert("✅ Contribution Added!");
        setContributions([...contributions, data]);
        setAmount(""); setName(""); setPhone(""); setAddress("");
      })
      .catch(err => console.error(err));
  };

  if (!issue) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-3">{issue.title}</h1>
      <img src={issue.image} alt={issue.title} className="w-full h-64 object-cover rounded mb-3" />
      <p><strong>Category:</strong> {issue.category}</p>
      <p><strong>Location:</strong> {issue.location}</p>
      <p><strong>Description:</strong> {issue.description}</p>
      <p><strong>Suggested Budget:</strong> ৳{issue.amount}</p>
      <p><strong>Date:</strong> {new Date(issue.date).toLocaleDateString()}</p>

      <div className="mt-6 p-4 border rounded shadow">
        <h2 className="font-bold text-lg mb-2">Pay Contribution</h2>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="block mb-2 border p-2 w-full"/>
        <input type="text" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} className="block mb-2 border p-2 w-full"/>
        <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="block mb-2 border p-2 w-full"/>
        <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} className="block mb-2 border p-2 w-full"/>
        <button onClick={handleContribution} className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600">Submit</button>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">Contributors</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {contributions.map((c, idx) => (
            <tr key={idx}>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">৳{c.amount}</td>
              <td className="border p-2">{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueDetails;
