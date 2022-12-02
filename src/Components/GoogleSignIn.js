import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const GoogleSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {GoogleSignInUser} = useContext(AuthContext);
    const handleGoogleSignIn = ()=>{
        GoogleSignInUser()
        .then(result=>{
            toast.success(`successfully login ${result?.user?.displayName}`)
           navigate(from, {replace:true})
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full mt-5'>CONTINUE WITH GOOGLE</button>
    );
};

export default GoogleSignIn;