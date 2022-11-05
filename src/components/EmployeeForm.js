import {useState} from "react";

const EmployeeForm = ({
  // name,
  // email,
  // empId,
  submitButtonText,
  addNewEmployee
}) => {
  const [employee,setEmployee] = useState({name: "", email: "", empId: ""})

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
          value={employee.name}
          name="name"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={employee.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Emp Id</label>
        <input
          type="text"
          placeholder="Enter Employee Id"
          value={employee.empId}
          name="empId"
          onChange={handleInputChange}
        />
      </div>

      <button onClick={ () =>addNewEmployee(employee)}>{submitButtonText}</button>
    </div>
  );
};

export default EmployeeForm;
