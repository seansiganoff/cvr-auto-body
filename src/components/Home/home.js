import React from 'react'
import './home.css';


// import { motion } from 'framer-motion';

const Home = () => {

  //Animates the vehicle icons when the page loads.
  // const visible = { opacity: 1, x: 0, transition: { duration: 0.4 } };
  //   const itemVariants = {
  //     hidden: { opacity: 0, x: -710 },
  //     visible
  //   };


  

  return (
    
    <div className='header'>
      
        <div className='home-container'>
          <img className='home-background-audi' src={require('../../images/audi-blue-cal.png')}  alt='Audi background' />
          
          <div className='home-text-top-left'>
              <img className='cvr-logo' src={require('../../images/CVR-logo.png')} alt='company logo'/><br /><br />
            <p className='home-p'>DENTS - SCRATCHES - RIMS - HEADLIGHTS</p><br />
            <p className='home-p-text'>
              At CVR, we specialize in convenient, high-quality mobile dent and scratch repair that comes directly to your home or office.
              Most repairs are completed the same day, avoiding the inconvenience of rental cars and lengthy repair times at a traditional body shop.
              We use the same factory grade materials as body shops, so you get the same quality repair that lasts!<br /><br />
              Whether it's a dent, scratch, bumper scuff, crack or major damage, we got you covered!
            </p>
          </div>
        </div>
    </div>
    
  )
}

export default Home