import React from 'react';
import babyImage  from '../../../assets/images/treatment.png'
const BabyCare = () => {
    return (
        <div className=" flex mt-20 lg:mt-1 flex-col lg:gap-x-[100px] items-center justify-center lg:mx-0 mx-5 lg:p-[154px] lg:card-side bg-base-100">
  <figure className='lg:w-1/2 w-full'><img className='w-full rounded-lg' src={babyImage} alt="babyImage"/></figure>
  <div className=" lg:w-1/2 w-full lg:mt-1 mt-4 flex flex-col  justify-center">
    <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h2>
    <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
    <div className="">
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
    </div>
    
  </div>
</div>
    );
};

export default BabyCare;