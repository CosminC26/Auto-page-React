import React, { useEffect, useState } from 'react';

//import data
import { bundleData } from '../data';
//import components
import Bundles from './Bundles'


const Prices = () => {
  //index state
  const [index, setIndex] = useState(0)
  //bundles state
  const [bundles, setBundles] = useState([])
  useEffect(()=> {
    setBundles(bundleData[0].services)
  },[]);

  return (
    <section id="prices" className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        {/*text */}
        <div className='text-center mb-20'>
          <div className='text-orange font-semibold mb-3'><h2 className='h2'>Our Prices</h2></div>
          <p className='text-lg text-blue'>Choose your category</p>
        </div>
        {/* bundles */}
        <Bundles  bundles={bundles}/>
      </div>
    </section>
  );
};

export default Prices;
