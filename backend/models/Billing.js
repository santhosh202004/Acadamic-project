// Billing.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Billing() {
    const location = useLocation();
    const { booking } = location.state; // Booking details passed from Dashboard

    return (
        <div>
            <h1>Billing for {booking.name}</h1>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p>Email: {booking.email}</p>
            <p>Phone: {booking.phone}</p>
            <p>Vehicle: {booking.vehicle}</p>
            <p>Implement: {booking.implement}</p>
            <p>Status: {booking.status}</p>

            {/* Add your billing form here */}
            <form>
                <label>
                    Amount:
                    <input type="number" name="amount" />
                </label>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
}

export default Billing;
