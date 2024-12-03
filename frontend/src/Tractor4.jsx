import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tractor1.css'; // Use the same CSS file for styling
import t4 from './machendra.jpg'; // Ensure this path is correct for your image

const Tractor4 = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleBookNowClick = () => {
        navigate('/order'); // Navigate to the Order component
    };

    return (
        <div className="tractor1-container">
            <h1 className="tractor-title">Mahindra Tractor</h1>
            <img src={t4} alt="Mahindra Tractor" className="tractor-image" />
            <p className="tractor-description">
                The Mahindra Tractor is known for its robust design and high-performance 
                capabilities. Engineered for heavy-duty tasks, this tractor excels in 
                various agricultural applications. With advanced features and exceptional 
                fuel efficiency, it is the perfect partner for farmers seeking reliability 
                and power in their daily operations. Get ready to elevate your farming 
                experience with Mahindra!
            </p>
            <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
            </button>
        </div>
    );
};

export default Tractor4;
