import React from 'react';
import contactBg from '../../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
    <section style={{background:`url(${contactBg})`}} className='mt-24 py-16'>
            <div className='max-w-[500px] mx-auto text-center border-2 border-white'>
            <div>
                <h2 className='text-primary text-2xl lg:text-4xl font-bold'>Contact Us</h2>
                <p className='text-white text-xl lg:text-3xl'>Stay Connected With Us</p>
            </div>
            <div>
                <form>
                    <input className='w-full block px-5 py-3 rounded-sm my-3' type="email" name="name" placeholder='Email Address' id="" />
                    <input  className='w-full block my-3 px-5 py-3 rounded-sm' type="text" name="name" placeholder='Subject' id="" />
                    <textarea  className='w-full resize-none block px-5 py-3 rounded-sm' name="message" placeholder='Message' id="" cols="30" rows="5"></textarea>
                    <button className='btn px-10 mt-5 btn-primary bg-gradient-to-r from-primary to-secondary'>submit</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default ContactUs;