import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
const Services = () => {
    const serviceInfo = [
        {
            id:1,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:fluoride,
        },
        {
            id:2,
            name:"Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:cavity,
        },
        {
            id:3,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:teeth,
        },
    ]

    return (
     <section className='max-w-screen-xl mx-5 lg:mx-auto'>
           <div className='mt-24'>
            <div className='text-center mb-16'>
                <h2 className='text-xl text-[#19D3AE]'>OUR SERVICES</h2>
                <h4 className='text-4xl'>Services We Provide</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    serviceInfo.map(service=><ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
     </section>
    );
};

export default Services;