import {useState} from "react"
const CheckBoxGroup = ()  => {

  const [gender,setGender] = useState("Female")
const handleChange = (e) => {
  setGender(e.target.value)
}
  return (
    <div>
      <h4> Select gender </h4>
      <div>
        <input
        id='male'
          value="Male"
          type="checkbox"
          checked={gender === "Male"}
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>
      </div>

      <div>
        <input
          id='female'
          value="Female"
          type="checkbox"
          checked={gender === "Female"}
          onChange={handleChange}
        />
        <label htmlFor='female'>Female</label>
      </div>

      <div>
        <input
        id='other'
          type="checkbox"
          value="Other"
          checked={gender === "Other"}
          onChange={handleChange}
        />
        <label htmlFor="other">Other</label>
      </div>
    </div>
  );
}

export default CheckBoxGroup;