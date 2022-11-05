const EmployeeCard = ({ name, email, empId }) => {
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
    </div>
  );
};

export default EmployeeCard;
