import { v4 as uuidv4 } from "uuid";
import { timestampsAreOnSameDay } from "./time";
import { TASKS } from "../constants";

// TODO: calc score based on urgency and importance for each task, and the app
// will tell you what to do next.
export const deleteTasks = () => {
  try {
    localStorage.removeItem(TASKS);
  } catch (error) {
    console.error(error);
  }
};

window.deleteTasks = deleteTasks;

export const getTasks = ({ timestamp }) => {
  const tasks = JSON.parse(localStorage.getItem(TASKS) || "[]");
  if (timestamp) {
    return tasks.filter(task => timestampsAreOnSameDay(task.timestamp, timestamp))
  }

  return tasks;
};

export const saveTask = (task, position) => {
  try {
    const tasks = getTasks();
    const existingTaskIndex = tasks.findIndex((t) => t.task.id === task.id);
    console.log({ existingTaskIndex });
    if (existingTaskIndex === -1) {
      localStorage.setItem(
        TASKS,
        JSON.stringify(getTasks().concat({ task, position }))
      );
    } else {
      localStorage.setItem(
        TASKS,
        JSON.stringify(
          tasks.map((t, i) =>
            i === existingTaskIndex ? { task, position } : t
          )
        )
      );
    }
  } catch (error) {
    console.error(error);
  }
};

// TODO: factory function for creating tasks
export const createTask = () => {
  return {
    task: {
      title: "Dinner with dad",
      shape: "heart",
      category: "personal",
      id: uuidv4(),
      timestamp: new Date().getTime(),
    },
    position: {
      x: 0,
      y: 0,
    },
  };
};
