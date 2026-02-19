import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
