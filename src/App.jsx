import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
function App() {
  return <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
  </div>;
}

export default App;
