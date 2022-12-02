import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../../Components/GoogleSignIn';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hook/useToken';
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    const location = useLocation();
    const [userEmail, setUserEmail] = useState('');
    const {token} = useToken(userEmail)
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    if(token){
        navigate(from, {replace:true})
    }
    const {signInUser} = useContext(AuthContext);
    const { register, handleSubmit , formState:{errors} } = useForm()
    const handleLogIn = data => {
       signInUser(data.email, data.password)
       .then(result=>{
        setUserEmail(result.user.email);
        toast.success(`successfully login ${result.user.displayName}`)
        
       })
       .catch(error=>{
        toast.error(error.message);
       })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-[100vh] flex justify-center items-center '>
                <div className='w-96 border border-primary p-7 rounded-lg'>
                <h1 className='text-center text-xl text-secondary'>Login Now</h1>
                <form onSubmit={handleSubmit(handleLogIn)}>
                    <label className='label label-text' htmlFor="email">Email</label>
                    <input className='input input-bordered w-full' type='email' 
                    {...register("email",{
                        required:"email must be required"})}
                        id='email' />
                    {errors.email && errors.email.type === "required" && <span className='text-red-500'>email is required</span>}
                    <label className='label label-text' htmlFor="password">Password</label>
                    <input className='input input-bordered w-full' type="password"
                     {...register("password", 
                     {required:"password must be required",
                      minLength:{value:6, message:"password must be upto 6 character"}})} id="password" />
                        
                   <p> {errors.password && <span className='text-red-600'>{errors?.password?.message}</span>}</p>
                    <label className='link hover:link'>Forget password</label>
                    <input className='btn btn-dark w-full mt-5'  type="submit" value="submit" />
                </form>
                    <span className='divider'>OR</span>
                    <span>New to Doctors Portal <Link className='text-secondary underline' to='/register'>create Account</Link> </span>
                   <GoogleSignIn></GoogleSignIn>
                </div>
            </div>
        </div>
    );
};

export default Login;