import { useState } from "react";
import "./App.css";
function App() {
  const [gender, setGender] = useState("Other");
  console.log("gender", gender);
  //Facts

  //1. Name property on all radio button will be same
  //2/ Value prop on input element will be hardcoded
  //Checked prop is used to indicate user which option selected
  return (
    <div className="App">
      <div className="item">
        <label htmlFor="male">Male</label>
        <input
          id="male"
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "Male"}
        />
      </div>

      <div className="item">
        <label htmlFor="female">Female</label>
        <input
          id="female"
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "Female"}
        />
      </div>

      <div className="item">
        <label htmlFor="other">Other</label>
        <input
          id="other"
          type="radio"
          name="gender"
          value="Other"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "Other"}
        />
      </div>
    </div>
  );
}

export default App;
