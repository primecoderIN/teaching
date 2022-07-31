import { useContext, createContext, useState } from "react";

//Creating context
const AppContext = createContext();


//Creating provider
export const AppProvider = ({ children }) => {
  const [number, setNumber] = useState(10);

  return (
    <AppContext.Provider value={{ number }}>{children}</AppContext.Provider>
  );
};

//Custom hook to consume data in any child component of this provider
//components automatically become children of this provider when you call this hook inside that component
const useAppContext = () => useContext(AppContext);

export default useAppContext;
