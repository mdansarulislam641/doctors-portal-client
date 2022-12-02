import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthProvider';

const MyAppointment = () => {
    const {user} = useContext(AuthContext);
    const {data:bookings=[]} = useQuery({
        queryKey:['bookings', user.email],
        queryFn:()=> fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
          headers:{
            authorization:`bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res=>res.json())
        .then(data=>data)
    })
    

    return (
        <div>
            <h1>Appointment</h1>
            <div>
             

<div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Time</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {
                    bookings.map((booking,i)=><tr key={booking._id}>
                        <th>{i+1}</th>
                        <td>{booking.name}</td>
                        <td>{booking.treatMentName}</td>
                        <td>{booking.appointMentDate}</td>
                        <td>{booking.appointmentTime}</td>
                        <td>{
                          booking?.price &&  !booking?.paid ? <Link to={`/dashboard/payment/${booking._id}`}>
                             <button  className='btn btn-sm btn-primary'>Pay</button>
                          </Link>:booking.paid && "PAID"
                          }</td>
                        
                      </tr>)
                }
      
    
     
    </tbody>
  </table>
</div>


            </div>
        </div>
    );
};

export default MyAppointment;