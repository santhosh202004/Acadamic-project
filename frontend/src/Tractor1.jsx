import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Tractor1.css'; // Ensure this path is correct for your CSS file
import t1 from './swaraj.jpg'; // Ensure this path is correct for your image

const Tractor1 = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleBookNowClick = () => {
        navigate('/order'); // Navigate to the Order component
    };

    return (
        <div className="tractor1-container">
            <h1 className="tractor-title">Swaraj Tractor</h1>
            <img src={t1} alt="Swaraj Tractor" className="tractor-image" />
            <p className="tractor-description">
                The Swaraj Tractor is designed to provide efficient power for agricultural 
                tasks. It combines strength with durability, ensuring that farmers can 
                depend on it for all their farming needs. With advanced technology and 
                superior engineering, this tractor is perfect for plowing, tilling, and 
                transporting goods. Experience the future of farming with Swaraj!
            </p>
            <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
            </button>
        </div>
    );
};

export default Tractor1;
