import { useState, useEffect,useReducer,useRef } from "react";
import axios from "axios";
import FirstComponent from "./FirstComponent";



const initialState = {
    counter: 0,
    user: []
}

const Reducer = (state,action) => {
    if (action.type === "INCREASE_COUNT"){
        console.log("Action received")
        return {...state,counter: state.counter+1}
    } 
    
    
    return state;
}


const Navbar = (prop) => {
    const [state,dispatch] = useReducer(Reducer, initialState)

  //useState adds a local state to a functional component
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState([]);
const myRef = useRef(null)
  //state is a variable where values are stored
  //setState is funtion to update this state value
  //Whenever state changes component will re-render

  const getUser = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (response.data) {
      dispatch({type: "STORE_USER_DATA", payload: response.data})
    }
  };

  useEffect(() => {
    getUser();
  }, [counter]);

  useEffect(()=> {
    console.log(myRef)
  })

  return (
    <div className="container">
        <input name='random' ref={myRef} />
      <h1 >Counter : {state.counter}</h1>
      <button onClick={() => dispatch({type: "INCREASE_COUNT"})}>Increase</button>
      <FirstComponent />
    </div>
  );
};

export default Navbar;
