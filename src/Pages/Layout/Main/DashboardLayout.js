import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useAdminRole from '../../../hook/useAdminRole';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdminRole(user?.email);
 
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ml-5">
  <Outlet></Outlet>

  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-200 text-base-content ">
    
      <li><Link to='/dashboard/myappointment'>My Appointment</Link></li>
      {isAdmin?.role === 'admin' && <>
      <li><Link to='/dashboard/allusers'>All Users</Link></li>
      <li><Link to='/dashboard/admin/adddoctors'>Add Doctors</Link></li>
      <li><Link to='/dashboard/admin/managedoctor'>Manage Doctors</Link></li>
      
      </>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;