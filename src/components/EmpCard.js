const EmployeeCard = ({ name, email, empId, setPageMode,id ,getSingleEmployee}) => {
  return (
    <div className="User">
      <div className="userDetail">
        <span>Name</span> :<span>{name}</span>
      </div>
      <div className="userDetail">
        <span>Email</span> :<span>{email}</span>
      </div>

      <div className="userDetail">
        <span>Emp Id</span> <span>{empId}</span>
      </div>
      <button onClick={()=> {
        setPageMode("edit");
        getSingleEmployee(id)
      }}>Edit</button>
    </div>
  );
};

export default EmployeeCard;
