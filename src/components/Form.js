import { useState } from "react";
const Form = () => {
    
    const [error,setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleInputChange = (e) => {
          const pattern = /^([0-9]{10})$/;
          const regex = new RegExp(pattern);
          const { name, value } = e.target;
    if (name === "mobile" && !regex.test(value)) {
      //Means jab ham mobile number field me type kr rhe h
      // tab ye validation hoga else nahi hoga
      setError("Number can not be less than 10")
      return;
    }
      setError("");
    setFormData({...formData, [name]: value})
  };

  const {name,email,mobile,password} = formData;
  const onFormSubmit = (e) => {
    e.preventDefault()//This is to stop the default behaviour of form element
   //Validation is mostly done in submit handler
   //But we can validate some fields or all fiels during typing also
   if(!name || !email || !mobile || !password){
    console.log("Hello");
     setError("All fields are mandatory!")
     return;
   }

   if(name.length>20) {
    setError("Maximum allowed length is 20")
    return;
   }

   console.log("Form data sent to backend-Form submitted successfully")
   
  }
  return (
    <div className="container">
      <form className="w-25 mx-auto mt-5" onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            aria-describedby="nameField"
            placeholder="Enter Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            className="form-control"
            id="mobile"
            aria-describedby="mobileField"
            placeholder="Enter Mobile Number"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group form-check"></div>
         <p className="text-danger">{error ? error : null}</p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
