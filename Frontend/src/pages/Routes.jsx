import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Frontend/Home";
import About from "./Frontend/About";
import Projects from "./Frontend/Projects";
import Contact from "./Frontend/Contact";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
      <Route path="/projects" element={<><Navbar /><Projects /><Footer /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}