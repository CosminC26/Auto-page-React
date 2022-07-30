import React from 'react';


// import component from 
import Hero from './components/Hero'
import Header from'./components/Header'
import Appointment from './components/Appointment'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
  <div className='w-full max-w-[1440] mx-auto bg-orange-quaternary relative'> 
    <Header  />
    <Hero />
    <Appointment />
    <Prices />
    <Contact />
    <Footer id="footer" />
  </div>
  );
};

export default App;