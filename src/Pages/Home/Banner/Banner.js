import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css'
import bgImage from '../../../assets/images/bg.png';
const Banner = () => {
    return (
       <div className={`hero min-h-[80vh] relative`} style={{background:`url(${bgImage})`}}>
         <div className=''>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="w-full h-[40vh] rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold text-red-600">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Banner;