import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_51M6oR4BwbNS5GXaWx0PqARJCmwG8F7EKQjbguM6679nOVM57Yfxqev9tIkOkYpCkmJi1I3NiEcrjzIH2bH6JWLUS00GrjVKWZL');
console.log(stripePromise)
const Payment = () => {
    const {id} = useParams();
    const {data, isLoading} = useQuery({
        queryKey:['bookings'],
        queryFn:()=>fetch(`http://localhost:5000/bookings/${id}`)
        .then(res => res.json())
        .then(data => data) 
    })
    if(isLoading){
        return <Loading></Loading>
    }
    const {appointmentTime, appointMentDate, treatMentName, price} = data
    console.log(data)
    return (
        <div>
            <h1 className='text-2xl mb-2'>Payment For <span className='font-bold'>{treatMentName}</span></h1>
             <p className='text-2xl'>Payment <strong>${price}</strong> appointment for <b>{appointMentDate}</b> from <b>{appointmentTime}</b></p>

             <div className='w-1/3  py-10 px-5'>
             <Elements stripe={stripePromise}>
      <CheckOutForm 
      booking={data}
      />
    </Elements>
             </div>
        </div>
    );
};

export default Payment;