import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckOutForm = ({booking}) => {
    const {price,email,_id} = booking ;
    const [error, setError] = useState('');
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transitionId, setTransitionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
useEffect(()=>{
    fetch('http://localhost:5000/create-payment-intent',{
        method:"POST",
        headers:{
            'content-type':"application/json",
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify({price})
    })
    .then(res=>res.json())
    .then(data=>setClientSecret(data.clientSecret))
},[price])


    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
          return;
        }
        setSuccess('')
      
    
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } 
          else{
            setError('');
          }
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
           clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: email,
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message)
            return ;
          }
          else{
            setCardError('')
        }
        setProcessing(true)
          if(paymentIntent.status==="succeeded"){
            const payment = {
                transitionId:paymentIntent.id,
                price,
                bookingId:_id

            }
        
            fetch('http://localhost:5000/payments',{
                method:"POST",
                headers:{
                    'content-type':'application/json',
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    setSuccess("Congrats Your payment successful");
                    setTransitionId(`Your transition is,${paymentIntent.id}`)
                }
            })
          }
          console.log(paymentIntent)
          setProcessing(false);
    }
    return (
      <>
      
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn text-white bg-primary px-3 py-1 mt-5 text-2xl' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className='text-red-600'>{error}</p>
      <p className='text-red-600'>{cardError}</p>
      {
        success && <>
        <p>{success}</p>
        <p>{transitionId}</p>
        </>
      }
      </>
    );
};

export default CheckOutForm;