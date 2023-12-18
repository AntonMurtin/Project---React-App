import { Navigate, Outlet } from "react-router-dom";

import { useProductContext } from '../../context/ProductContext';


export const SearchGuard=({
    children,
})=>{
    const { search } = useProductContext();
    
    if (search===null) {
        return <Navigate to="/" />;
    }

    return children ? children : <Outlet />
};