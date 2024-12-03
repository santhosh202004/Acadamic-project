// import React, { useState } from 'react';
// import './Order.css';

// const Order = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     date: '',
//     email: '',
//     phone: '',
//     vehicle: '',
//     implement: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://localhost:5000/book', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Booking Details:', data);
//         setSubmitted(true);
//         setFormData({
//           name: '',
//           date: '',
//           email: '',
//           phone: '',
//           vehicle: '',
//           implement: ''
//         });
//       })
//       .catch(error => console.error('Error:', error));
//   };

//   const handleAnotherBooking = () => {
//     setSubmitted(false); // Reset the form to allow new booking
//   };

//   return (
//     <div className="booking-page">
//       <h2>Book Your Equipment</h2>
//       <p><b>Please fill in the details to book your required equipment</b></p>
      
//       {submitted ? (
//         <div className="confirmation-message">
//           <h3>Thank you for your booking!</h3>
//           <p>Your booking has been successfully submitted.</p>
//           <button onClick={handleAnotherBooking} className="response-button">Submit Another Booking</button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="booking-form">
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="date">Date:</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               pattern="[0-9]{10}"
//               placeholder="Enter your 10-digit phone number"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="vehicle">Vehicle:</label>
//             <select
//               id="vehicle"
//               name="vehicle"
//               value={formData.vehicle}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select a vehicle</option>
//               <option value="John Deere">John Deere</option>
//               <option value="Kubota">Kubota</option>
//               <option value="Swaraj">Swaraj</option>
//               <option value="Mahindra">Mahindra</option>
//               <option value="JCB">JCB</option>
//               <option value="Lorry">Lorry</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="implement">Equipments:</label>
//             <select
//               id="implement"
//               name="implement"
//               value={formData.implement}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select an Equipment</option>
//               <option value="None">None</option> {/* Added "None" option */}
//               <option value="Baler">Baler</option>
//               <option value="Minivator">Minivator</option>
//               <option value="7 Arm Cultivator">7 Arm Cultivator</option>
//               <option value="5 Arm Cultivator">5 Arm Cultivator</option>
//               <option value="Ridger">Ridger</option>
//               <option value="Trolly">Trolly</option>
//             </select>
//           </div>

//           <button type="submit" className="submit-button">Submit Booking</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Order;
import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    email: '',
    phone: '',
    vehicle: '',
    implement: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          // If there's a conflict (status 409), handle the error
          if (response.status === 409) {
            return response.json().then(data => {
              throw new Error(data.error); // Assuming backend sends error message in 'error' field
            });
          }
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then(data => {
        console.log('Booking Details:', data);
        setSubmitted(true);
        setFormData({
          name: '',
          date: '',
          email: '',
          phone: '',
          vehicle: '',
          implement: ''
        });
      })
      .catch(error => {
        console.error('Error:', error.message);
        alert(error.message); // Display the error to the user
      });
  };

  const handleAnotherBooking = () => {
    setSubmitted(false); // Reset the form to allow new booking
  };

  return (
    <div className="booking-page">
      <h2>Book Your Equipment</h2>
      <p><b>Please fill in the details to book your required equipment</b></p>
      
      {submitted ? (
        <div className="confirmation-message">
          <h3>Thank you for your booking!</h3>
          <p>Your booking has been successfully submitted.</p>
          <button onClick={handleAnotherBooking} className="response-button">Submit Another Booking</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Enter your 10-digit phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="vehicle">Vehicle:</label>
            <select
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              required
            >
              <option value="">Select a vehicle</option>
              <option value="John Deere">John Deere</option>
              <option value="Kubota">Kubota</option>
              <option value="Swaraj">Swaraj</option>
              <option value="Mahindra">Mahindra</option>
              <option value="JCB">JCB</option>
              <option value="Lorry">Lorry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="implement">Equipments:</label>
            <select
              id="implement"
              name="implement"
              value={formData.implement}
              onChange={handleChange}
              required
            >
              <option value="">Select an Equipment</option>
              <option value="None">None</option> {/* Added "None" option */}
              <option value="Baler">Baler</option>
              <option value="Minivator">Minivator</option>
              <option value="7 Arm Cultivator">7 Arm Cultivator</option>
              <option value="5 Arm Cultivator">5 Arm Cultivator</option>
              <option value="Ridger">Ridger</option>
              <option value="Trolly">Trolly</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Submit Booking</button>
        </form>
      )}
    </div>
  );
};

export default Order;
