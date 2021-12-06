const AddTaskButton = ({ onAdd }) => {
  return (
    <button className="add-task-button" onClick={onAdd}>
      Add Task
    </button>
  );
};

export default AddTaskButton;
