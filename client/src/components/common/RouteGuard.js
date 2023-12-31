import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from '../../context/AuthContext';


export const RouteGuard = ({
    children,
}) => {
    const { isAuthenticated, isAdmin } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    

    return children ? children : <Outlet />
};
