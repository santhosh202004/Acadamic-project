// Lorry.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import lorryImage from './truck.png'; // Import the Lorry image
import './Tractor1.css'; // Use the same CSS file for styling

const Lorry = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleBookNowClick = () => {
        navigate('/order'); // Navigate to the Order component
    };

    return (
        <div className="tractor1-container">
            <h1 className="tractor-title">Lorry</h1>
            <div className="tractor-content">
                <img src={lorryImage} alt="Lorry" className="tractor-image" />
                <p className="tractor-description">
                    Our Lorry is built for efficiency and reliability, perfect for transporting goods across long distances. 
                    With a robust design and powerful engine, it ensures that your cargo reaches its destination safely and on time. 
                    Ideal for agricultural and industrial use, our Lorry is your partner for all your transportation needs. 
                    Choose our Lorry for a smooth and reliable hauling experience!
                </p>
                <p>Per Hour: ₹700</p>
            </div>
            <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
            </button>
        </div>
    );
};

export default Lorry;
