import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { AuthContext } from '../../context/AuthProvider';
import useAdminRole from '../../hook/useAdminRole';

const AdminRoutes = ({children}) => {
    const {user,logOutCurrentUser,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading]= useAdminRole(user?.email)
    const location = useLocation();
    if(loading || isAdminLoading){
        return <Loading></Loading>
    }
    if(isAdmin?.role === 'admin'){
        return children;
    }
    else{
        return <>
        {logOutCurrentUser()}
        <Navigate to='/login' state={{from:location}} replace></Navigate>
        </>
    }
};

export default AdminRoutes;