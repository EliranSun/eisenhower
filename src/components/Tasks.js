import { useState, useEffect } from "react";
import { commonTasks } from "../mocks/tasks";
import { createTask, getTasks } from "../utils";
import { AddTaskButton, Task } from ".";

const Tasks = ({ timestamp }) => {
  const [tasks, setTasks] = useState(getTasks({ timestamp }) || commonTasks);

  useEffect(() => {
    setTasks(getTasks({ timestamp }));
  }, [timestamp]);

  const addTask = () => {
    const newTask = createTask();
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      {tasks.map(({ task, position }) => (
        <Task task={task} position={position} />
      ))}
      <AddTaskButton onAdd={addTask} />
    </div>
  );
};

export default Tasks;
