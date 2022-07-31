import './App.css';
import { AppProvider } from './components/AppContext';
import Navbar from './components/Navbar';


function App() {
  const userData = {
    name: "Sanjeev",
    sex : "Male"
  }
  const name1 = userData.name;
  const name2 = userData["name"]
  const {name} = userData;
  console.log(name2)
  return (
    <AppProvider>
      <Navbar userData={userData} />
    </AppProvider>
  );
}

export default App;
