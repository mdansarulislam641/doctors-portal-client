
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import Loading from '../../../Components/Loading';
import AppointSlotModal from '../AppointSlotModal/AppointSlotModal';
import AppointmentOptionsCard from './AppointmentOptionsCard';

const AppointmentDateOptions = ({selectedDate}) => {
    const date = format(selectedDate,"PP")
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [options, setOptions] = useState(null);

    const {data:appointmentOptions=[], refetch, isLoading } = useQuery({
        queryKey:['doctorsMeetOptions', date],
        queryFn:async()=> {
            const res = await fetch(`http://localhost:5000/doctorsMeetOptions?date=${date}`)
            const data = await res.json()
            return (data.data)
        }

    })

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch('http://localhost:5000/doctorsMeetOptions')
    //     .then(res=>res.json())
    //     .then(data=>setAppointmentOptions(data.data))
    // },[])
    return (
      <section className='my-20'>
          <div className='max-w-screen-lg mx-auto'>
            <p className='text-center text-secondary font-bold text-2xl'>You Have Selected Date:{format(selectedDate,"PP")}</p>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {
                        appointmentOptions.map((option, idx)=><AppointmentOptionsCard
                            key={idx}
                            appointmentOptions={option}
                            setOptions={setOptions}
                            
                        ></AppointmentOptionsCard>)
                    }
            </div>
        </div>
     { options &&
         <AppointSlotModal
         options={options}
         selectedDate={selectedDate}
         setOptions={setOptions}
         refetch={refetch}
         
       ></AppointSlotModal>
     }
      </section>
    );
};

export default AppointmentDateOptions;