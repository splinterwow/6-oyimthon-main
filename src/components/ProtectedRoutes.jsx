import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ProtectedRoutes({ children }) {
  const { user } = useContext(GlobalContext);
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoutes;
