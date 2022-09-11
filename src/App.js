import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    //This function will get us all the list of tasks which
    //we will use to render
    const response = await axios.get("http://localhost:4000/api/v1/tasks");
    if (response?.status === 200 && response?.data) {
      setTasks(response.data);
      // console.log(response.data)
    }
  };

  const deleteOneTask = async (TaskID) => {
    console.log(`Task with task id ${TaskID} deleted `)
    //This function will get us all the list of tasks which
    //we will use to render
    const response = await axios.delete(
      `http://localhost:4000/api/v1/tasks/${TaskID}`
    );
    if (response?.status === 200 && response?.data) {
      console.log("Task deleted");
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="App">
      <Tasks {...tasks} deleteOneTask={deleteOneTask} />
      <Form />
    </div>
  );
}

export default App;
