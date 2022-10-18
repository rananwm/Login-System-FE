import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ isUser, redirectPath = "/", children }) => {
  if (isUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PublicRoute;
