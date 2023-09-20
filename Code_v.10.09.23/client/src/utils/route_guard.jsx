import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);
  const is_authenticated = Boolean(user);

  return is_authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
