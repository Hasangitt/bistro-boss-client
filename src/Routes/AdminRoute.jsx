import { useContext } from "react";
import useAdmin from "../hooks/useAdmin/useAdmin";
import { AuthContext } from "../Pages/Auth/Providers/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

  if (loading || isAdminLoading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user && isAdmin ) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};



export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.node
}