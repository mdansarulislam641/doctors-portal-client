import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Components/Loading';
import ConfirmationMaodal from './ConfurmationModal/ConfirmationMaodal';

const ManageDoctor = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const {data:doctors, refetch, isLoading} = useQuery({
        queryKey:['doctors'],
        queryFn:async()=>{
            const res =await fetch('http://localhost:5000/doctors',
            {
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data =await res.json()
            return data.data ;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

   const handleDeleteDoctor = id =>{
        fetch(`http://localhost:5000/doctors/${id}`,{
            method:"DELETE",
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.data.acknowledged){
                toast.success("successfully deleted doctor");
                refetch()
                setDeleteDoctor(null)
            }
        })
   }

    return (
        <div>
          
            <div className="overflow-x-auto w-full">
  { doctors.length ?
    <>
      <h1> Manage doctor {doctors.length===0 ? 0 : doctors.length}</h1>
           
           <table className="table w-full">
           <thead>
             <tr>
               <th>
                 <label>
                   <input type="checkbox" className="checkbox" />
                 </label>
               </th>
               <th>Name</th>
               <th>Specialty</th>
               <th>Email</th>
               <th>Control</th>
             </tr>
           </thead>
           <tbody>
                { doctors.map(doctor=>  <tr key={doctor._id}>
                           <th>
                             <label>
                               <input type="checkbox" className="checkbox" />
                             </label>
                           </th>
                           <td>
                             <div className="flex items-center space-x-3">
                               <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                   <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                               </div>
                               <div>
                                 <div className="font-bold">{doctor.name}</div>
                               </div>
                             </div>
                           </td>
                           <td>
                            {doctor.specialty}
                           </td>
                           <td>{doctor.email}</td>
                           <th>
                           <label onClick={()=>setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs">Delete</label>
                             
                           </th>
                         </tr>)}
           </tbody>
         </table>
    </> : <div className='flex  justify-center items-center h-[80vh] text-3xl font-bold'>
    <p>No Doctors Available Right Now</p>
  </div>
  }
</div>
        {
            deleteDoctor && 
            <ConfirmationMaodal
            title={`Are You sure you want to delete`}
            deleteDoctor={deleteDoctor}
            handleDeleteDoctor={handleDeleteDoctor}
            ></ConfirmationMaodal>

        }
          
        </div>
    );
};

export default ManageDoctor;