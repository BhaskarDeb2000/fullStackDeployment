import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get(
        "https://full-stack-deployment-sandy.vercel.app/tasks"
      );
      setTasks(res.data.tasks);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks?.map((i, index) => (
        <p key={index}>{i.task}</p>
      ))}
    </div>
  );
}
