import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import cultivator3 from './v.jpg';
import './BalerDetails.css'; // Make sure to import the CSS file

const RidgerDetails = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [isBlinking, setIsBlinking] = useState(false);

  // Effect to handle blinking
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
      <img src={cultivator3} alt='Ridger' className='baler-image' />
      <div className="baler-text">
        <h1>Green System Ridger</h1>
        <p>A Ridger is a vital secondary tillage tool used in agriculture for creating ridges, especially for
           row crops like sugarcane, potatoes, chilies, and bananas. It shapes the soil into raised rows,
           improving aeration, drainage, and root growth. Ridgers also facilitate water management, essential 
           for irrigation, by opening furrows that direct water flow. Used after primary tillage, ridgers 
           come in various designs, including single and multiple-row models. They are adjustable for different row widths, enhancing crop yields and 
           reducing soil erosion, making them indispensable for efficient farming.
        </p>
        <p><b>WELCOME TO A FUTURE WHERE FARMING .</b></p>

        {/* Per Hour Price with Blinking Effect */}
        <p className={isBlinking ? 'blinking-text' : ''}>Per Hour: ₹400</p>

        {/* Book Now Button */}
        <button className="book-now-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RidgerDetails;
