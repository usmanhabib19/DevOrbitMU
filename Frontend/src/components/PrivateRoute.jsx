import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import ScreenLoader from "./ScreenLoader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <ScreenLoader />;
    if (!user) return <Navigate to="/admin/login" replace />;

    return children;
};

export default PrivateRoute;