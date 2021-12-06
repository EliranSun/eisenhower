import { useState } from "react";
import Draggable from "react-draggable";
import { saveTask } from "../utils";

const Task = ({ task, position }) => {
  const [title, setTitle] = useState(task.title);
  const [innerPosition, setInnerPosition] = useState(position);
  const { x, y } = position;

  console.log(task, { x, y });
  return (
    <Draggable
      position={{ x: innerPosition.x || x, y: innerPosition.y || y }}
      onStop={(e, draggableData) => {
        console.log({ draggableData });
        const newPosition = { x: draggableData.x, y: draggableData.y };
        setInnerPosition(newPosition);
        saveTask({ ...task, title }, newPosition);
      }}
    >
      <input
        type="text"
        className="draggable-input"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </Draggable>
  );
};

export default Task;
