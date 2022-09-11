import "./Task.css"
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

const Task = ({ task, deleteOneTask }) => {
  return (
    <div className="taskContainer">
      <div>
        <h3>{task?.name}</h3>
        <span>{`Status : ${task?.completed ? "Done" : "Pending"}`}</span>
      </div>
      <div className="actionButtons">
        <button className="editBtn" onClick={() => console.log("")}>
          <AiFillEdit />
        </button>

        <button className="deleteBtn" onClick={() => deleteOneTask(task._id)}>
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
};

export default Task