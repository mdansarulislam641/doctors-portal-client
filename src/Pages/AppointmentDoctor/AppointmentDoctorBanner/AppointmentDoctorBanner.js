import React from 'react';
import chair from '../../../assets/images/chair.png';
import chairBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentDoctorBanner = ({selectedDate, setSelectedDate}) => {
   
    return (
        <header className='py-10' style={{background:`url(${chairBg})` 
                        ,backgroundPosition:"center",
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover"
        }}>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto'>
                <div>
                    <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={(selectedDate)=>{
                        if(selectedDate){
                            setSelectedDate(selectedDate)
                        }
                    }}
                    ></DayPicker>
                </div>
                <figure>
                    <img src={chair} alt="" />
                </figure>
            </div>
        </header>
    );
};

export default AppointmentDoctorBanner;