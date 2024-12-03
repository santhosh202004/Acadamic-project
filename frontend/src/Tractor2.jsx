import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tractor1.css'; // Use the same CSS file for styling
import t2 from './john.jpg'; // Ensure this path is correct for your image

const Tractor2 = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleBookNowClick = () => {
        navigate('/order'); // Navigate to the Order component
    };

    return (
        <div className="tractor1-container">
            <h1 className="tractor-title">John Deere Tractor</h1>
            <img src={t2} alt="John Deere Tractor" className="tractor-image" />
            <p className="tractor-description">
            John Deere tractors are known for their unmatched reliability, efficiency, and advanced technology, making them a top choice for farmers. Built with powerful engines and user-friendly controls, they excel in tasks like plowing, tilling, and harvesting. These tractors deliver superior performance and productivity on any terrain. With a focus on sustainability and innovation, John Deere leads the way in eco-friendly farming solutions.







            </p>
            <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
            </button>
        </div>
    );
};

export default Tractor2;
