import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
    </>
  );
}

export default App;
