// Jcb.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import jcbImage from './jcb.webp'; // Import the JCB image
import './Tractor1.css'; // Use the same CSS file for styling

const Jcb = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleBookNowClick = () => {
        navigate('/order'); // Navigate to the Order component
    };

    return (
        <div className="tractor1-container">
            <h1 className="tractor-title">JCB</h1>
            <div className="tractor-content">
                <img src={jcbImage} alt="JCB" className="tractor-image" />
                <p className="tractor-description">
                    The JCB is a versatile and robust machine designed for various construction and agricultural tasks. 
                    Known for its reliability and efficiency, the JCB can handle digging, lifting, and moving materials with ease. 
                    With advanced technology and superior performance, it's an essential tool for your farming and construction needs. 
                    Choose JCB for productivity and reliability on every job!
                </p>
                <p>Per Hour: ₹1400</p>
            </div>
            <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
            </button>
        </div>
    );
};

export default Jcb;
