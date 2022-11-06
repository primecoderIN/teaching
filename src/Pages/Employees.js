import {useState} from "react";
import UserCard from "../components/EmpCard";
import EmployeeForm from "../components/EmployeeForm";
import "./Employees.css"

const Employees = ({ employees, addNewEmployee, updateOneEmployee,getSingleEmployee,employee }) => {
  const [pageMode, setPageMode] = useState("");

  let submitButtonText = "";
  if (pageMode === "add") {
    submitButtonText = "Save";
  }

  if (pageMode === "edit") {
    submitButtonText = "Update";
  }
  return (
    <div className="Wrapper">
      <div className="FormWrapper">
        {(pageMode === "" || pageMode === "add") && (
          <button onClick={() => setPageMode("add")}>Add New User</button>
        )}

        {pageMode && (
          <EmployeeForm
            submitButtonText={submitButtonText}
            addNewEmployee={addNewEmployee}
            updateOneEmployee={updateOneEmployee}
            pageMode={pageMode}
            employee={employee}
          />
        )}
      </div>
      <div className="EmployeesList">
        {employees.length !== 0 ? (
          employees.map((employee) => {
            return (
              <UserCard
                key={employee.id}
                name={employee.name}
                email={employee.email}
                empId={employee.empId}
                id={employee.id}
                setPageMode={setPageMode}
                getSingleEmployee={getSingleEmployee}
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
