import React from 'react';

const Card = ({card}) => {
    const {name, description, icon, bgColor} = card ;
    return (
        <div className={`card lg:card-side py-4 ${bgColor} shadow-xl text-white px-4`}>
  <figure><img src={icon} alt="cardIcon"/></figure>
  <div className="card-body text-center md:text-left">
    <h2 className="">{name}</h2>
    <p>{description}</p>
   
  </div>
</div>
    );
};

export default Card;