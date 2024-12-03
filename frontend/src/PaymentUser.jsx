import React, { useState, useRef } from 'react';
import './PaymentUser.css';
import QR from './QR.png'; // Adjust the path according to your project structure

const PaymentUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    landmark: '',
    phnum: '',
    method: 'online', // Default payment method
    transactionId: '',
    photo: null, // For file uploads
  });

  const [error, setError] = useState('');
  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] })); // Handle file input
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paymentDetails = new FormData();

    // Append all necessary fields
    for (const key in formData) {
      paymentDetails.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:5000/payments', {
        method: 'POST',
        body: paymentDetails,
      });
      if (response.ok) {
        alert('Payment details submitted successfully!');
        // Reset the form after submission
        setFormData({
          name: '',
          email: '',
          landmark: '',
          phnum: '',
          method: 'online',
          transactionId: '',
          photo: null,
        });
      } else {
        throw new Error('Failed to submit payment details');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  return (
    <div>
      <h1>Submit Payment Details</h1>

      {/* Centered QR Code and Description */}
      <div className="qr-container">
        <img src={QR} alt="QR Code for Payment" className="qr-image" />
        <p className="qr-description">Scan the QR to pay</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Landmark */}
        <input
          type="text"
          name="landmark"
          placeholder="Landmark"
          value={formData.landmark}
          onChange={handleChange}
          required
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phnum"
          placeholder="Phone Number"
          value={formData.phnum}
          onChange={handleChange}
          required
        />

        {/* Payment Method */}
        <select name="method" value={formData.method} onChange={handleChange} required>
          <option value="online">Online</option>
          <option value="cash">Cash</option>
        </select>

        {/* Transaction ID - Only for online payment */}
        {formData.method === 'online' && (
          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />
        )}


        {/* Submit Button */}
        <button type="submit">Submit Payment</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PaymentUser;
