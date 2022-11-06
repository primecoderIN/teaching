import {useState} from "react";

const EmployeeForm = ({
  submitButtonText,
  addNewEmployee,
  employee,
  pageMode
}) => {


  const [employeeDetail, setEmployee] = useState(
   { name: "", email: "", empId: "" }
  );

  const handleInputChange = e => {
    const {name,value} = e.target;
        setEmployee({...employee, [name] : value})
  }
  return (
    <div className="FormWrapper">
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={pageMode === "edit" ? employee.name : employeeDetail.name}
          name="name"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={pageMode === "edit" ? employee.email : employeeDetail.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Emp Id</label>
        <input
          type="text"
          placeholder="Enter Employee Id"
          value={pageMode === "edit" ? employee.empId : employeeDetail.empId}
          name="empId"
          onChange={handleInputChange}
        />
      </div>

      <button
        onClick={() =>
          addNewEmployee({ ...employee, id: new Date().valueOf() })
        }
      >
        {submitButtonText}
      </button>
    </div>
  );
};

export default EmployeeForm;
