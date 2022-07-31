import useAppContext from "./AppContext"


const ThirdComponent = () => {
    const {number} = useAppContext()
  return (
    <div>Number is : {number}</div>
  )
}

export default ThirdComponent