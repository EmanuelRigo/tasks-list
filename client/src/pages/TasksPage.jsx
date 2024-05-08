import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TasksContext";
import { useEffect } from "react";

const TasksPage = () => {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>no hay tareas</h1>;

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id}></TaskCard>
      ))}
    </div>
  );
};

export default TasksPage;
