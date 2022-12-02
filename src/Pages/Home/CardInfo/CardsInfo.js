import React from 'react';
import time from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import Card from './Card';
const CardsInfo = () => {
    const cardsInfo =[
        {
            id:1,
            name:"Opening Hours",
            description:"Morning 9.00am to night 9.00pm ",
            icon:time,
            bgColor:'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id:2,
            name:"Visit our location",
            description:"Brooklyn, NY 10036, United States",
            icon:location,
            bgColor:'bg-gradient-to-r from-neutral to-neutral'
        },
        {
            id:3,
            name:"Contact us now",
            description:"+000 123 456789",
            icon:phone,
            bgColor:'bg-gradient-to-r from-primary to-secondary'
        },
    ]


    return (
      <section className='max-w-screen-xl mx-auto'>
          <div className='grid grid-cols-1 lg:mx-0 mx-5 mt-20 lg:mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardsInfo.map(card=><Card
                    key={card.id}
                    card={card}
                ></Card>)
            }
        </div>
      </section>
    );
};

export default CardsInfo;