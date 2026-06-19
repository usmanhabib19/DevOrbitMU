import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
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