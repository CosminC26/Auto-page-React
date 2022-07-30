import React from 'react';


//import image
import DogImg from '../assets/img/cars/car-contact.png'
const Contact = () => {
  return (
  <section className='bg-yellow-secondary pt-6'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-around'>
        {/* image */}
        <div className='order-1 lg:-order-1 lg:mt-16'>
          <img className='-mb-[12px]' src={DogImg} />
        </div>
        {/* text */}
        <div className='flex flex-col items-center justify-center'>
          <div  className='text-orange font-semibold mb-3'> Contact</div>
          <div className='text-4xl font-extrabold'> 0711-111-111 </div>
          <div className=' mb-7 text-blue'> Opening Hours: Mon-Fri</div>
          <button className='btn '> Get an appointment</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
