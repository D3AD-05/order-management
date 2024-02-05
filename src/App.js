import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import LoginComponent from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
