import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children ;
    }
   else{
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
   }
};

export default PrivateRoute;