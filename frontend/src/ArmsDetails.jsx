import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import cultivator2 from './5arm.jpg';
import './BalerDetails.css'; // Make sure to import the CSS file

const ArmsDetails = () => {
  const navigate = useNavigate(); // Initialize navigation
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
    <div className="baler-details-container">
      <img src={cultivator2} alt='Arms' className='baler-image' />
      <div className="baler-text">
        <h1>Green System Ridger</h1>
        <p>
          A Ridger is a vital secondary tillage tool used in agriculture for creating ridges, especially for
          row crops like sugarcane, potatoes, chilies, and bananas. It shapes the soil into raised rows,
          improving aeration, drainage, and root growth. Ridgers also facilitate water management, essential 
          for irrigation, by opening furrows that direct water flow. Used after primary tillage, ridgers 
          come in various designs, including single and multiple-row models. They are adjustable for different row widths, enhancing crop yields and 
          reducing soil erosion, making them indispensable for efficient farming.
        </p>
        <p><b>WELCOME TO A FUTURE WHERE FARMING IS SIMPLIFIED.</b></p>

        {/* Per Hour Rate with Blinking Effect */}
        <p className={isBlinking ? 'blinking-text' : ''}>Per Hour: ₹900</p>

        {/* Book Now Button */}
        <button className="book-now-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ArmsDetails;
