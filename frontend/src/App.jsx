import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Registration from "./components/Registration";
import Admin from "./components/Admin";
import AtHome from "./components/AtHome";
import Login from "./components/Login";
import Profile from "./components/Profile";
import useUserData from "./hooks/useUserData";
import ManagePlayers from "./components/ManagePlayers";
import ManageUsers from "./components/ManageUsers";
import ManageGroups from "./components/ManageGroups";

function App() {
  const { userData, getMe, logout } = useUserData();
  const navigate = useNavigate()
  const handleLogin = async ()=>{
    getMe()
    navigate("/home")
  }
  const handleLogout = async ()=>{
    logout()
    navigate("/home")
  }
  return (
    <div className="app-container">
      <Nav userData={userData} onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin" element={<ManageUsers />} />
        <Route path="/athome" element={<AtHome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/players" element={<ManagePlayers />}/>
        <Route path="/admin/groups" element={<ManageGroups/>}/>
      </Routes>
    </div>
  );
}

export default App;
