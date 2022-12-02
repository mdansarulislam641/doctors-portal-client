import React from 'react';

const ServiceCard = ({service}) => {
    const {name, description, icon}= service;
    return (
        <div className="card w-full text-center bg-base-100 shadow-xl">
        <figure><img src={icon} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-2xl">{name}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    );
};

export default ServiceCard;