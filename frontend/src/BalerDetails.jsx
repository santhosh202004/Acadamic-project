import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baler from './c.jpg';
import './BalerDetails.css';

const BalerDetails = () => {
  const navigate = useNavigate();
  const [isBlinking, setIsBlinking] = useState(false); // State for blinking effect

  // Effect to handle blinking for the rate
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev); // Toggle blinking state
    }, 500); // Change every 500ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleBookNow = () => {
    navigate('/order'); // Navigate to the Order page when button is clicked
  };

  return (
    <div className="baler-details-wrapper">
      <div className="baler-details-container">
        <img src={baler} alt='baler' className='baler-image' />
        <div className="baler-text">
          <h1>Dharti Mitra Round Baler by Mahindra</h1>
          <p>
            Introduce simplicity and efficiency on your farm with the innovative 
            Dharti Mitra Round Balers by Mahindra. Tailored specifically for efficient farming,
            these tractor-powered balers effortlessly transform cut straw into evenly round bales.
            With their superior operational productivity, they let you save time, spare your savings, 
            and reserve energy. Witness a new farming era and discard old, manual methods with the 
            transformative Mahindra Round Balers.
          </p> 
          <p><b>WELCOME TO A FUTURE WHERE FARMING IS A BREEZE.</b></p>

          {/* Per Cont Rate with Blinking Effect */}
          <p className={isBlinking ? 'blinking-text' : ''}>Per Cont: ₹40</p>

          <button className="book-now-btn" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalerDetails;
