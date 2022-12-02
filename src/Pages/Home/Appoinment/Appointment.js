import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import doctorBg from '../../../assets/images/appointment.png';
const Appointment = () => {
    return (

<section className='bg-red-500 mt-20 md:mt-32  lg:mt-20' style={{background:`url(${doctorBg})`}}>
        <div className='max-w-screen-xl mx-auto grid md:grid-cols-2   items-center py-5 md:py-0 lg:py-0'>
        <div>
                <img className='md:-mt-20 lg:-mt-40  hidden md:block' src={doctor} alt="" />
            </div>
            <div className='mx-5'>
                <h1 className='md:text-2xl lg:text-3xl text-primary font-bold'>APPOINTMENT</h1>
                <h3 className='md:text-3xl lg:text-4xl text-white'>Make an Appointment Today</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, necessitatibus laboriosam hic minima voluptatem possimus molestias earum illum beatae sit tempora recusandae velit id! Consequatur, tenetur repudiandae voluptatum harum, accusantium omnis aut illo eos perferendis rem quidem qui incidunt rerum amet, quas voluptate quos magni quam odit soluta ipsam nemo debitis est quasi.</p>
            </div>
        </div>
        </section>
    );
};

export default Appointment;