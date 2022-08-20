import {useEffect,useState} from 'react'


const App = () => {

  const [counter , setCounter]  = useState(0)
  const [counter2,setCounter2] = useState(0)

 //UseEffect is also a hook(function) like useState 

 //It is used to do side effects in react components 

 //Anything happens outside of component is called a side effect

 //Example of side effects are 

 //1. Fetching data from api 

 //2. Accessing data from local storage 

 //3. Console.log is also a side effect 

 //There are three ways to use it 

 //Useffect takes a callback function as first parameter which is mandatory
 //Second parameter of useEffect is dependency array which is optional 
 //It does not return anything

 //Whenever we update state in the component useEffect will get trigger 


 //Three ways to use UseEffect 

 //1. 

 useEffect(()=> {
  console.log("1. I will run everytime when state changes and also during intial render of component")
  //Whatever code we write here in this callback will be executed by useEffect 
 })

 //2.

 useEffect(()=> {
  console.log("2. I will run only once on intial render of component")
 },[])

 //if we add empty dependecy array as second param of 
 //useEffect then the code inside useEffect callback will run only once
 

 //3. 

 useEffect(()=> {
  document.title = `${counter} Messages `;
    console.log("3. I will run on intial render of component and also when counter changes")
 },[counter])


 const handleIncrease = () => {
   setCounter(prev => prev+1  )
   setCounter((prev) => prev + 1);
   setCounter((prev) => prev + 1);
   setCounter((prev) => prev + 1);
   setCounter((prev) => prev + 1);
 }

 
  return (
    <div>
      <h1>Count : {counter}</h1>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={handleIncrease}>
        Increase COunter 1
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increase COunter 2
      </button>
    </div>
  );
}

export default App