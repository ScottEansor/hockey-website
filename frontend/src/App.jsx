import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Registration from "./components/Registration";
import Admin from "./components/Admin";
import AtHome from "./components/AtHome";
import Login from "./components/Login";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/athome" element={<AtHome />} />
      </Routes>
    </div>
  );
}

export default App;
