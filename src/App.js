import { useState } from "react";
import "./App.css";
import Employees from "./Pages/Employees";

const App = () => {
  //Treat this state as database
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || []
  );

  //State for editing employee
  const [employee, setEmployee] = useState({});

  //A function to add new employee
  const addNewEmployee = (employee) => {
    //Copied values from state and added new employee and the same wil be replaced in state
    const allEmployees = [...employees, employee];
    localStorage.setItem("employees", JSON.stringify(allEmployees));
    setEmployees(allEmployees);
  };

  //Get Current user to edit data and then passing in employee form to prefill inputs there

  const getSingleEmployee = (id) => {
    //Job of this function is just to find the user to update
    const employee = employees.find((emp) => {
      return emp.id === id;
    });
    console.log("emp", employee);
    setEmployee(employee);
  };

  return (
    <Employees
      employees={employees}
      addNewEmployee={addNewEmployee}
      getSingleEmployee={getSingleEmployee}
      employee={employee}
    />
  );
};

export default App;
