import React, { useState } from 'react';
import axios from 'axios';

const MyOrders = () => {
  const [phone, setPhone] = useState('');
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:5000/bookings');
      setBookings(response.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('No bookings found for this phone number');
        setBookings([]); // Clear bookings if none are found
      } else {
        setError('An error occurred while fetching bookings');
      }
    }
  };

  return (
    <div>
      <h2>My Orders</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Enter Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p>{error}</p>}

      {bookings.length > 0 && (
        <div>
          <h3>Your Bookings:</h3>
          <ul>
            {bookings.map((booking) => (
              <li key={booking._id}>
                <p>Vehicle: {booking.vehicle}</p>
                <p>Implement: {booking.implement}</p>
                <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                <p>Status: {booking.status}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
