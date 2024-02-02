import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
   
  </Routes>
  );
}

export default App;
