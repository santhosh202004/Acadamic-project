import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import cultivator from './k.jpg';
import './BalerDetails.css'; // Make sure to import the CSS file

const ArmDetails = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleBookNow = () => {
    navigate('/order'); // Navigate to the Order page when button is clicked
  };

  return (
    <div className="baler-details-container">
      <img src={cultivator} alt='cultivator' className='baler-image' />
      <div className="baler-text">
        <h1>Mahindra ARM Loaded Cultivator</h1>
        <p>
          Level up your farming game with the Mahindra Spring Loaded Heavy Duty Cultivator! 
          Designed to tackle even the toughest soil conditions, this powerful tool effortlessly
          loosens and aerates soil to a depth, creating the perfect seedbed in no time. 
          Whether you're preparing your land for planting or maintaining your crops, this cultivator is 
          your go-to solution for efficient and economical soil preparation. Featuring a robust construction 
          with surface protection through powder coating and superior
          strength achieved through MIG welding, this cultivator is built to last.
        </p>
        <p><b>WELCOME TO A FUTURE WHERE FARMING IS MADE EASY.</b></p>

        {/* Per Hour Rate */}
        <p>Per Hour: ₹700</p>

        {/* Book Now Button */}
        <button className="book-now-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ArmDetails;
