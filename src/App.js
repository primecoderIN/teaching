import { useState } from "react";
import "./App.css";

function App() {
  const [gender, setGender] = useState("Other");

  console.log("gender", gender);
  return (
    <div className="App">
      <select
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default App;
