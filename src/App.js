import "./styles.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/registration";
import Dashboard from "./components/dashboard";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}
