import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tractor1.css'; // Use the same CSS file for styling
import t3 from './kubota.jpg'; // Ensure this path is correct for your image

const Tractor3 = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleBookNowClick = () => {
        navigate('/order'); // Navigate to the Order component
    };

    return (
        <div className="tractor1-container">
            <h1 className="tractor-title">Kubota Tractor</h1>
            <img src={t3} alt="Kubota Tractor" className="tractor-image" />
            <p className="tractor-description">
            Kubota tractors are celebrated for their versatility, durability, and innovative design, making them a top choice for farmers. They offer excellent fuel efficiency, strong engine performance, and user-friendly controls. Kubota’s tractors excel in heavy-duty agricultural tasks and landscaping, delivering reliable power and smooth operation.
            </p>
            <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
            </button>
        </div>
    );
};

export default Tractor3;
