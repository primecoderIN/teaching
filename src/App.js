import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [count,setCount] = useState(0);
  //Hooks : Nothing  but a function
  //useStateHook adds a local state to a functional component
  //State is nothing but a variable to store data and preserve it during re-render
  //So useState is also a function(hook) which takes one parameter which is 
  //nothing but intial state

  //When you call this hook(function) then it returns us two things

  //1. State(nothing but a variable to store data) name and count are state here for example

  //2. It returns an another function to update those states(name , count)

  //Whenever state changes component will re-render

  console.log("Count", count)
  console.log("Name",name)
  return (
    <div className="App">
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  );
}

export default App;
