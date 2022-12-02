import React, { useState } from 'react';
import AppointmentDateOptions from '../AppointmentDateOptions/AppointmentDateOptions';
import AppointmentDoctorBanner from '../AppointmentDoctorBanner/AppointmentDoctorBanner';

const AppointmentDoctor = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
           <AppointmentDoctorBanner
           selectedDate={selectedDate}
           setSelectedDate={setSelectedDate}
           ></AppointmentDoctorBanner>
           <AppointmentDateOptions
           selectedDate={selectedDate}
           ></AppointmentDateOptions>
        </div>
    );
};

export default AppointmentDoctor;