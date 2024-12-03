// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
// import Mini from './Minivator.png';
// import './BalerDetails.css'; // Make sure to import the CSS file

// const MinivatorDetails = () => {
//   const navigate = useNavigate(); // Initialize navigation

//   const handleBookNow = () => {
//     navigate('/order'); // Navigate to the Order page when button is clicked
//   };

//   return (
//     <div className="baler-details-container">
//       <img src={Mini} alt='Minivator' className='baler-image' />
//       <div className="baler-text">
//         <h1>Mahindra Minivator</h1>
//         <p>Experience the apex of farming efficiency with the Mahindra Minivator. 
//           Remarkably designed for excellent pulverization and optimal soil conditioning, 
//           it delivers the ultimate weed control. This extraordinary farm implement is the 
//           perfect choice for seedbed preparation and puddling in small fields. Enjoy its 
//           proficiency as it can quickly and effectively loosen and aerate the soil up to 
//           101.6 mm in depth. Whether you're cultivating fruits, vegetables, running a small 
//           farm, an orchard, or a nursery, the Mahindra Minivator is a versatile champion. 
//           Perfectly compatible with 11.7 - 22 kW (16 - 30 HP) Tractors, this power-packed 
//           tool could be your ultimate farming companion. Get the Mahindra Minivator now and thrive in your farming endeavors!
//         </p>
//         <p><b>WELCOME TO A FUTURE WHERE FARMING IS A .</b></p>

//         {/* Book Now Button */}
//         <button className="book-now-btn" onClick={handleBookNow}>
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MinivatorDetails;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Mini from './Minivator.png';
import './BalerDetails.css'; // Make sure to import the CSS file

const MinivatorDetails = () => {
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
      <img src={Mini} alt='Minivator' className='baler-image' />
      <div className="baler-text">
        <h1>Mahindra Minivator</h1>
        <p>Experience the apex of farming efficiency with the Mahindra Minivator. 
          Remarkably designed for excellent pulverization and optimal soil conditioning, 
          it delivers the ultimate weed control. This extraordinary farm implement is the 
          perfect choice for seedbed preparation and puddling in small fields. Enjoy its 
          proficiency as it can quickly and effectively loosen and aerate the soil up to 
          101.6 mm in depth. Whether you're cultivating fruits, vegetables, running a small 
          farm, an orchard, or a nursery, the Mahindra Minivator is a versatile champion. 
          Perfectly compatible with 11.7 - 22 kW (16 - 30 HP) Tractors, this power-packed 
          tool could be your ultimate farming companion. Get the Mahindra Minivator now and thrive in your farming endeavors!
        </p>
        <p><b>WELCOME TO A FUTURE WHERE FARMING IS A .</b></p>

        {/* Per Hour Price with Blinking Effect */}
        <p className={isBlinking ? 'blinking-text' : ''}>Per Hour: ₹700</p>

        {/* Book Now Button */}
        <button className="book-now-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MinivatorDetails;
