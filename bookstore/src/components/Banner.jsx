/*import React from 'react'
import banner from '../assets/Banner.png'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
    <div className='space-y-12'>
    <h1 className='text-4xl font-bold'>
            Hello, welcome here to leran something <span className='text-pink-500'>new everyday!!! </span>
    </h1>
    <p className='text-xl '>Welcome to our bookstore, a haven for book lovers! Whether you seek bestsellers, timeless classics, or hidden literary gems, we have something for everyone. Explore diverse genres, discover new authors, and immerse yourself in captivating stories.</p>
    
    <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" placeholder="Email" required/>
</label>
<div className="validator-hint hidden"> Email </div>


    </div>
    <button className="btn mt-6 btn-secondary">Secondary</button>
    </div>
    <div className='order-1 w-full md:w-1/2 mt-20 ml-7'>
    <img src={banner} ></img>
    </div>
    </div>
    </>
  );
}

export default Banner;
*/
import React from 'react';
import banner from '../assets/Banner.png';

function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
              Hello, welcome here to learn something <span className='text-pink-500'>new every day!!!</span>
            </h1>
            <p className='text-xl'>
              Welcome to our bookstore, a heaven for book lovers! Whether you seek bestsellers, timeless classics, or hidden literary gems, we have something for everyone. Explore diverse genres, discover new authors, and immerse yourself in captivating stories.
            </p>
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Email" required />
            </label>
            <div className="validator-hint hidden">Email</div>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className='order-1 w-full md:w-1/2 mt-20 ml-7'>
          <img src={banner} alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;
