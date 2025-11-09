import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAllIssues = () => API.get("/issues");
export const getIssueById = (id) => API.get(`/issues/${id}`);
export const addIssue = (issue) => API.post("/issues", issue);
export const updateIssue = (id, data) => API.put(`/issues/${id}`, data);
export const deleteIssue = (id) => API.delete(`/issues/${id}`);

export const addContribution = (contrib) => API.post("/contributions", contrib);
export const getContributionsByIssue = (issueId) => API.get(`/contributions/${issueId}`);
export const getContributionsByUser = (email) => API.get(`/my-contributions/${email}`);
