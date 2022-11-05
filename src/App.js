import { useState } from "react";
import "./App.css";
import Employees from "./Pages/Employees";

const App = () => {

    //Treat this state as database
  const [employees, setEmployees] = useState([
   
  ]);

  //A function to add new employee
  const addNewEmployee = (employee) => {
    console.log("Hello")
    setEmployees([...employees, employee]);
  };

  //A function to edit/update existing employee
  const updateOneEmployee = (employee) => {
    console.log("Employee Updated");
  };

  return (
    <Employees
      employees={employees}
      addNewEmployee={addNewEmployee}
      updateOneEmployee={updateOneEmployee}
    />
  );
};

export default App;
