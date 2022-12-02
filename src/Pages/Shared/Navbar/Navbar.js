import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Switch from "react-switch";
import { ThemeContext } from '../../../context/ThemeProvider';

const Navbar = () => {
  const {user, logOutCurrentUser} = useContext(AuthContext);
 const {themeToggle, theme} = useContext(ThemeContext);
  const handleSignOut = () =>{
    logOutCurrentUser()
    .then(result=>{
      toast.success("successfully sign out")
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }
    const menuItem =<>
        <Link to='/home'>Home</Link>
        <Link to='/appointment'>Appointment</Link>
        <Link to='/about'>About</Link>
       {
        user?.uid ? 
         <>
         <Link to='/dashboard'>Dashboard</Link>
         <button onClick={handleSignOut} className='btn btn-ghost'>logOut</button>
         </> :  
         <Link to='/login'>Login</Link>
       }
         <button> <Switch  onChange={()=>themeToggle()} checked={theme}/></button>
    </>
    return (
        <div className="navbar bg-base-100">
       <div className='flex justify-between max-w-screen-xl mx-auto w-full'>
       <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>  {menuItem}</li>
            </ul>
            
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
        
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
         <li>  {menuItem}</li>
          </ul>
          
        </div>
       </div>
      </div>
    );
};

export default Navbar;