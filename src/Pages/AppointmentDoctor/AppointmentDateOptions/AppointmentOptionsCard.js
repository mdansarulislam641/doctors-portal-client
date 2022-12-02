import React from 'react';
 const AppointmentOptionsCard = ({appointmentOptions,setOptions}) => {
    const {name, slots,price} = appointmentOptions ;
    return (
        <div className='shadow-lg py-5 text-center dark:bg-black dark:text-white dark:shadow-lg shadow-white'>
            <h2 className='text-secondary text-2xl'>{name}</h2>
            <h3>{slots.length > 0 ? slots[0] : "try another day"}</h3>
            <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} 
            available</p>
            <p>Price: ${price}</p>
         <label onClick={()=>setOptions(appointmentOptions)} htmlFor="appointment-booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary mt-5">BOOK APPOINTMENT</label>
        </div>
    );
};

export default AppointmentOptionsCard;