import React, { useState } from 'react';
import './Billing.css';

function Billing() {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [implementsUsed, setImplementsUsed] = useState('');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [count, setCount] = useState(0);  // New state for count
    const [amount, setAmount] = useState(0);
    const [perHourRate, setPerHourRate] = useState(0);
    const [implementRate, setImplementRate] = useState(0);

    // Hourly rates for each vehicle
    const vehicleRates = {
        "John Deere": 0,
        "Kubota": 0,
        "Swaraj": 0,
        "Mahindra": 0,
        "JCB": 1500,
        "Lorry": 1000
    };

    // Rates for each implement
    const implementRates = {
        "5 Arm Cultivator": 900,
        "7 Arm Cultivator": 900,
        "Minivator": 1100,
        "Ridger": 600,
        "Baler": 40,  // Rate per count
        "Trolly": 500  // Rate per count
    };

    // Function to calculate the total amount
    const calculateTotalAmount = (vehicle, implementsUsed, hours, minutes, count) => {
        const vehicleRate = vehicleRates[vehicle] || 0;
        const implementRate = implementRates[implementsUsed] || 0;

        // If no implement is selected, only calculate the vehicle rate
        if (implementsUsed === 'None') {
            const totalHours = hours + minutes / 60;
            return vehicleRate * totalHours;
        }

        // For Baler and Trolly, use count-based calculation
        if (implementsUsed === 'Baler' || implementsUsed === 'Trolly') {
            return implementRate * count;
        }

        // For other implements, use time-based calculation
        const totalHours = hours + minutes / 60;
        return (vehicleRate + implementRate) * totalHours;
    };

    // Function to calculate per-hour rate
    const calculatePerHourRate = (vehicle, implementsUsed) => {
        return {
            vehicleRate: vehicleRates[vehicle] || 0,
            implementRate: implementRates[implementsUsed] || 0
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalAmount = calculateTotalAmount(vehicle, implementsUsed, hours, minutes, count);
        const rates = calculatePerHourRate(vehicle, implementsUsed);
        setAmount(totalAmount);
        setPerHourRate(rates.vehicleRate);
        setImplementRate(rates.implementRate);
    };

    // Function to send the bill via WhatsApp
    const handleSendBill = () => {
        const message = `Vehicle: ${vehicle}\nVehicle Per Hour Rate: ₹${perHourRate}\nImplement: ${implementsUsed}\nImplement Per Hour Rate: ₹${implementRate}\nHours: ${hours}\nMinutes: ${minutes}\nTotal Amount: ₹${amount.toFixed(2)}`;
        const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="billing-container">
            <h1>Billing Information</h1>

            <form onSubmit={handleSubmit} className="billing-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number:</label>
                    <input 
                        type="tel" 
                        id="whatsapp" 
                        value={whatsapp} 
                        onChange={(e) => setWhatsapp(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="vehicle">Vehicle Used:</label>
                    <select 
                        id="vehicle" 
                        value={vehicle} 
                        onChange={(e) => setVehicle(e.target.value)} 
                        required
                    >
                        <option value="" disabled>Select Vehicle</option>
                        <option value="John Deere">John Deere</option>
                        <option value="Kubota">Kubota</option>
                        <option value="Swaraj">Swaraj</option>
                        <option value="Mahindra">Mahindra</option>
                        <option value="JCB">JCB</option>
                        <option value="Lorry">Lorry</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="implementsUsed">Implements Used:</label>
                    <select 
                        id="implementsUsed" 
                        value={implementsUsed} 
                        onChange={(e) => setImplementsUsed(e.target.value)} 
                        required
                    >
                        <option value="" disabled>Select Implement</option>
                        <option value="None">None</option> {/* Added "None" option */}
                        <option value="Baler">Baler</option>
                        <option value="Minivator">Minivator</option>
                        <option value="5 Arm Cultivator">5 Arm Cultivator</option>
                        <option value="7 Arm Cultivator">7 Arm Cultivator</option>
                        <option value="Ridger">Ridger</option>
                        <option value="Trolly">Trolly</option>
                    </select>
                </div>

                {/* Only show time input fields if the implement is NOT Baler or Trolly */}
                {(implementsUsed !== 'Baler' && implementsUsed !== 'Trolly') && (
                    <>
                        <div className="form-group">
                            <label htmlFor="hours">Hours:</label>
                            <input 
                                type="number" 
                                id="hours" 
                                value={hours} 
                                onChange={(e) => setHours(Number(e.target.value))} 
                                required 
                                min="0" 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="minutes">Minutes:</label>
                            <input 
                                type="number" 
                                id="minutes" 
                                value={minutes} 
                                onChange={(e) => setMinutes(Number(e.target.value))} 
                                required 
                                min="0" 
                                max="59"
                            />
                        </div>
                    </>
                )}

                {/* Only show count input field if the implement is Baler or Trolly */}
                {(implementsUsed === 'Baler' || implementsUsed === 'Trolly') && (
                    <div className="form-group">
                        <label htmlFor="count">Count:</label>
                        <input 
                            type="number" 
                            id="count" 
                            value={count} 
                            onChange={(e) => setCount(Number(e.target.value))} 
                            required 
                            min="1" 
                        />
                    </div>
                )}

                <button type="submit" className="submit-button">Calculate Amount</button>
            </form>

            {amount > 0 && (
                <div className="total-amount">
                    <h2>Total Amount</h2>
                    <p>Vehicle: {vehicle}</p>
                    <p>Vehicle Per Hour Rate: ₹{perHourRate}</p>
                    <p>Implement: {implementsUsed}</p>
                    <p>Implement Per Hour Rate: ₹{implementRate}</p>
                    
                    {/* Show time information if the implement is not Baler, Trolly, or None */}
                    {(implementsUsed !== 'Baler' && implementsUsed !== 'Trolly') && (
                        <>
                            <p>Hours: {hours}</p>
                            <p>Minutes: {minutes}</p>
                        </>
                    )}

                    {/* Show count information if the implement is Baler or Trolly */}
                    {(implementsUsed === 'Baler' || implementsUsed === 'Trolly') && (
                        <p>Count: {count}</p>
                    )}

                    <p>Total Amount: ₹{amount.toFixed(2)}</p>
                    
                    <button onClick={handleSendBill} className="send-bill-button">Send Bill</button>
                </div>
            )}
        </div>
    );
}

export default Billing;
