import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {  useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../../Components/GoogleSignIn';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hook/useToken';
import Navbar from '../Shared/Navbar/Navbar';

const Register = () => {
    const {createNewUser,updateUserProfile} = useContext(AuthContext);
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [createdEmail, setCreatedEmail] = useState('');
    const {token} = useToken(createdEmail);
    const navigate = useNavigate();
    if(token){
        navigate('/');
    }
    const handleSignUp = data =>{
        createNewUser(data.email, data.password)
        .then(result=>{
            console.log(result.user)
            toast.success(`successfully register ${result.user?.DisplayName}`)

            updateUserProfile(data.name)
            .then(result=>{
                toast.success("successfully added user name")
                userInformation(data.name, data.email)
            })
            .catch(e=>console.log(e.message))
           
        })
        .catch(error=>{
            // console.log(error.message)
            toast.error(error.message);
        })

    }
    const userInformation = (name,email) =>{
        const userInfo={name, email}
        fetch('http://localhost:5000/users',{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userInfo)
        })
        .then(result=>{
          setCreatedEmail(email);
       
           
        })
        .catch(e=>console.log(e.message))
    }
   


    return (
        <div>
        <Navbar></Navbar>
        <div className='h-[100vh] flex justify-center items-center '>
            <div className='w-96 border border-primary p-7 rounded-lg'>
            <h1 className='text-center text-xl text-secondary'>Register Now</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
               <div>
               <label className='label label-text' htmlFor="name">Name</label>
                <input className='input input-bordered w-full' type='text'   id='name'
                {...register("name",
                {required:"Name must be required"},{minLength:{value:6,message:"must be 6 character"}},
            )}
                />
                {errors.name && <p className='text-red-700'>{errors?.name?.message}</p>}
               </div>
               <div>
               <label className='label label-text' htmlFor="email">Email</label>
                <input className='input input-bordered w-full' type='email'   id='email'
                {...register("email",
                {required:"Email must be required"})}
                />
                {errors.email && <p className='text-red-600'>{errors?.email?.message}</p>}
               </div>
               <div>
        
               <label className='label label-text' htmlFor="password">Password</label>
                <input className='input input-bordered w-full' type="password"id="password"
                    {...register("password",
                    { pattern:{value:/(?=.*[0-9])(?=.*[a-z])/ , message:"Must be One Number"}},
                    {minLength:{value:6,message:"password must be 6 character"}},
                    {required:"password must be required"}, )}
                />
                {errors?.password && <p className='text-red-700'>{errors?.password?.message}</p>}
               </div>
               <div>
               <input className='btn btn-dark w-full mt-5'  type="submit" value="submit" />
               </div>
            </form>
                <span className='divider'>OR</span>
                <span>Already Have an account <Link className='text-secondary underline' to='/login'>please login</Link> </span>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    </div>
    );
};

export default Register;