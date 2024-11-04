import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://full-stack-deployment-sandy.vercel.app/users"
      );
      setUsers(res.data.data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((i, index) => (
        <div key={index}>
          <h2>{i.id}</h2>
          <p>{i.name}</p>
        </div>
      ))}
    </div>
  );
}
