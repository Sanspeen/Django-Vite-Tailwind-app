import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import TaskCard from "./TaskCard";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      console.log(res);
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
