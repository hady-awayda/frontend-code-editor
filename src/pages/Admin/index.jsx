import "./style.css";
import getUsers from "../../data/remote/admin/read";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-page text-black">
      <div className="flex justify-between items-center h-32 mx-12">
        <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
        <Link
          to={"/import"}
          className="run-button h-12 flex justify-center items-center"
        >
          Bulk Import
        </Link>
      </div>
      <div className="user-list">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
