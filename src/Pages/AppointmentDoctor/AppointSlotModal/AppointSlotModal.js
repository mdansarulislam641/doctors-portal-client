import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const AppointSlotModal = ({options, selectedDate,setOptions,refetch}) => {
    const date = format(selectedDate,"PP");
    const {user} = useContext(AuthContext);
    const {name: treatment, slots, price,_id} = options;
    const handleAppointment = event =>{
        event.preventDefault()
        const form = event.target ;
        const appointMentDate = form.selectedDate.value ;
        const appointmentTime = form.selectAppointmentTime.value ;
        const name = form.name.value ;
        const phone = form.phone.value ;
        const email = form.email.value ;
        const appointmentInfo = {
            name,
            treatMentName:treatment,
            treatMentId:_id,
            requestTime:format(new Date(),"PP"),
            appointMentDate,
            appointmentTime,
            email,
            phone,
            price

        }

        fetch('http://localhost:5000/bookings',{
            method:"post",
            headers:{
                "content-type":"application/json",
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(appointmentInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.data?.acknowledged){
                setOptions(null)
                refetch()
                toast.success("booking confirmed");
            }
            else{
                toast.error(data.message)
                
            }
        })
      
    }

    return (
       <>
       <input type="checkbox" id="appointment-booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="appointment-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-secondary">{treatment}</h3>
    <div className='mt-5'>
        <form onSubmit={handleAppointment} className='grid grid-cols-1 gap-5'>
            <input className='input input-bordered w-full' type="text" name="selectedDate" value={date} disabled />
           <select name='selectAppointmentTime' className='select select-bordered w-full'>
           
            {
               slots &&  slots.map((slot, idx)=> <option key={idx} value={slot}>{slot}</option>)
            }
           </select>
           <input className='input input-bordered w-full' defaultValue={user?.displayName} readOnly disabled type="text" name="name" placeholder='Full Name' id="" />
           <input className='input input-bordered w-full' type="text" name="phone" placeholder='Phone Number' id="" />
           <input className='input input-bordered w-full' defaultValue={user?.email} disabled type="email" name="email" placeholder='Your Email' id="" />
           <input   className='bg-primary py-3 rounded-lg text-white text-2xl' type="submit" value="SUBMIT" />
        </form>
    </div>
  </div>
</div>
       </>
    );
};

export default AppointSlotModal;