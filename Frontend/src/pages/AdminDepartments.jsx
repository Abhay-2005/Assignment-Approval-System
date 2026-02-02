import { useEffect, useState } from "react";
import axios from "axios";

const AdminDepartments = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchDepartments = async () => {
    const res = await axios.get("http://localhost:5000/admin/departments", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setDepartments(res.data);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(
        "http://localhost:5000/admin/departments",
        { name, code },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setName("");
      setCode("");
      fetchDepartments();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>Create Department</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Department Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>

      <h3>All Departments</h3>
      <ul>
        {departments.map((d) => (
          <li key={d._id}>
            {d.name} ({d.code})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDepartments;
