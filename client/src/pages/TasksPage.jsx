import { useTask } from "../context/TasksContext";
import { useEffect } from "react";

const TasksPage = () => {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>no hay tareas</h1>;

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title} </h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;
