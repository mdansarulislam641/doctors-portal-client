import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Components/Loading';


const AllUsers = () => {


   const {data:users=[], refetch,isLoading} = useQuery({
    queryKey:['users'],
    queryFn:()=>fetch(`http://localhost:5000/users`,{
      headers:{
        authorization:`bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>res.json())
    .then(data=>data.data)
   })
   
 
   const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:"PUT",
            headers:{
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                toast.success("admin added successfully");
                refetch();
            }
        })
   }
   if(isLoading){
    return <Loading></Loading>
   }

    return (
        <div>
            <h1>this is all users</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
    {
           users  &&  users?.map((user,i)=><tr key={user._id}>
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{ user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-primary btn-xs'>make admin</button> }</td>
                        <td><button className='btn btn-xs'>delete</button></td>
                      </tr>)
                }
      
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;