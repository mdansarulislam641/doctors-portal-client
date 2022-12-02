import React from 'react';
import user1 from '../../../assets/images/people1.png';
import user2 from '../../../assets/images/people2.png';
import user3 from '../../../assets/images/people3.png';
import comma from '../../../assets/icons/quote.svg';
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const testimonialInfo = [
        {
            id:1,
            name:"John Cena",
            image:user1,
            review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni similique, magnam dolor dolore praesentium ",
            treatment:"cavity"
        },
        {
            id:2,
            name:"Roman Rings",
            image:user2,
            review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni similique, magnam dolor dolore praesentium ",
            treatment:"cavity"
        },
        {
            id:3,
            name:"Block nesner",
            image:user3,
            review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni similique, magnam dolor dolore praesentium ",
            treatment:"cavity"
        },
    ]
    return (
        <section className='max-w-screen-xl mx-5 lg:mx-auto mt-20'>
            <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-2xl md:text-3xl text-primary font-bold'>TESTIMONIAL</h1>
                <h3 className='text-2xl md:text-3xl lg:text-4xl'>What Our Patients Say's</h3>
            </div>
           <figure>
            <img className='w-24 lg:w-48' src={comma} alt="" />
           </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testimonialInfo.map(testimonial=><TestimonialCard
                    key={testimonial.id}
                    review={testimonial}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial