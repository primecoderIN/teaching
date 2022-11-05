import {useState} from "react";
import UserCard from "../components/EmpCard";
import EmployeeForm from "../components/EmployeeForm";
import "./Employees.css"

const Employees = ({ employees, addNewEmployee }) => {
  const [pageMode, setPageMode] = useState("");

  let submitButtonText='';
  if(pageMode==="add") {
    submitButtonText="Save"
  }

  if(pageMode==="edit") {
    submitButtonText='Update'
  }
  return (
    <div className="Wrapper">
      <div className="FormWrapper">
        {(pageMode==="" || pageMode==="add") && (
          <button onClick={() => setPageMode("add")}>Add New User</button>
        )}

        {pageMode && (
          <EmployeeForm
            submitButtonText={submitButtonText}
            addNewEmployee={addNewEmployee}
          />
        )}
      </div>
      <div className="EmployeesList">
        {employees.length !== 0 ? (
          employees.map((employee, index) => {
            return (
              <UserCard
                key={employee.empId}
                name={employee.name}
                email={employee.email}
                empId={employee.empId}
                setPageMode={setPageMode}
              />
            );
          })
        ) : (
          <h1>No Users</h1>
        )}
      </div>
    </div>
  );
};


export default Employees;
