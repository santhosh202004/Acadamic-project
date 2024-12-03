
import React, { useState } from 'react';
import axios from 'axios';

const EditVehicle = () => {
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleDescription, setVehicleDescription] = useState('');
    const [image, setImage] = useState(null); // Change initial state to null
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(); // Create a FormData object
        formData.append('vehicleName', vehicleName);
        formData.append('vehicleDescription', vehicleDescription);
        formData.append('image', image); // Append the image file
        formData.append('price', Number(price));

        try {
            const response = await axios.post('http://localhost:5000/vehicles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set the content type for FormData
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error adding vehicle:', error.response.data); // Log the error response
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={vehicleName}
                onChange={(e) => setVehicleName(e.target.value)}
                placeholder="Vehicle Name"
                required
            />
            <input
                type="text"
                value={vehicleDescription}
                onChange={(e) => setVehicleDescription(e.target.value)}
                placeholder="Vehicle Description"
                required
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])} // Get the file from input
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <button type="submit">Add Vehicle</button>
        </form>
    );
};

export default EditVehicle;
