import React from 'react';
import Appointment from '../Appoinment/Appointment';
import Banner from '../Banner/Banner';
import CardsInfo from '../CardInfo/CardsInfo';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import BabyCare from '../BabyCare/BabyCare';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <CardsInfo></CardsInfo>
            <Services></Services>
            <BabyCare></BabyCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;