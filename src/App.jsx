import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import { AuhtProvide } from "./context/authContext";

function App() {
  return (
    <>
      <AuhtProvide>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuhtProvide>
    </>
  );
}

export default App;
