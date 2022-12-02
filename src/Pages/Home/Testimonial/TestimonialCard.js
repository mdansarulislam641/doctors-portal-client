import React from 'react';

const TestimonialCard = ({ review }) => {
    const { name, image, review: userReview ,treatment} = review;
    return (
        <div className=' px-8 py-5 shadow-lg rounded-xl mt-5 lg:mt-10'>
            <div>
                <p>{userReview}</p>
            </div>
            <div className='flex items-center gap-5 mt-5'>
                <div className="avatar">
                    <div className="md:w-24 w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='' />
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p>{treatment}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;