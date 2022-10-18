import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isUser, redirectPath = "/login", children }) => {
  if (!isUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
