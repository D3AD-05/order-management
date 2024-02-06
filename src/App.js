import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import LoginComponent from "./pages/About";
import SignIn from "./pages/Login/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
