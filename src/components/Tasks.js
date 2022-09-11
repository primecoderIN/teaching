import "./Tasks.css";
import Task from "./Task";

const Tasks = ({ tasks, deleteOneTask }) => {
  return (
    <div className="wrapper">
      {tasks?.map((task, index) => {
        return (
          <Task task={task} key={task?._id} deleteOneTask={deleteOneTask} />
        );
      })}
    </div>
  );
};

export default Tasks;
