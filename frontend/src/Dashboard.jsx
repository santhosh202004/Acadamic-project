


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// function Dashboard() {
//     const [users, setUsers] = useState([]);
//     const [bookings, setBookings] = useState([]);
//     const [payments, setPayments] = useState([]);
//     const [loadingUsers, setLoadingUsers] = useState(true);
//     const [loadingBookings, setLoadingBookings] = useState(false);
//     const [loadingPayments, setLoadingPayments] = useState(false);
//     const [error, setError] = useState(null);
//     const [activeTab, setActiveTab] = useState('users');
//     const [editingBooking, setEditingBooking] = useState(null);
//     const [selectedPayment, setSelectedPayment] = useState(null); // State for selected payment
//     const [paymentImage, setPaymentImage] = useState(''); // State for payment image URL

//     const navigate = useNavigate();

//     // Fetch users on component mount
//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch users');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setUsers(data);
//                 setLoadingUsers(false);
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setLoadingUsers(false);
//             });
//     }, []);

//     // Fetch bookings function
//     const fetchBookings = () => {
//         if (bookings.length === 0 && !loadingBookings) {
//             setLoadingBookings(true);
//             fetch('http://localhost:5000/bookings')
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Failed to fetch bookings');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     setBookings(data);
//                     setLoadingBookings(false);
//                 })
//                 .catch(error => {
//                     setError(error.message);
//                     setLoadingBookings(false);
//                 });
//         }
//         setActiveTab('bookings');
//     };

//     // Fetch payments function
//     const fetchPayments = () => {
//         if (payments.length === 0 && !loadingPayments) {
//             setLoadingPayments(true);
//             fetch('http://localhost:5000/payments')
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Failed to fetch payments');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log(data); // Log payments data to inspect
//                     setPayments(data);
//                     setLoadingPayments(false);
//                 })
//                 .catch(error => {
//                     setError(error.message);
//                     setLoadingPayments(false);
//                 });
//         }
//         setActiveTab('payments');
//     };

//     const handleLogout = () => {
//         navigate('/login');
//     };

//     const handleEditClick = (booking) => {
//         setEditingBooking(booking);
//     };

//     const handleEditChange = (e) => {
//         setEditingBooking({ ...editingBooking, [e.target.name]: e.target.value });
//     };

//     const handleEditSubmit = (e) => {
//         e.preventDefault();

//         fetch(`http://localhost:5000/bookings/${editingBooking._id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(editingBooking),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to update booking');
//             }
//             return response.json();
//         })
//         .then(updatedBooking => {
//             setBookings(prevBookings => 
//                 prevBookings.map(booking => 
//                     booking._id === updatedBooking._id ? updatedBooking : booking
//                 )
//             );
//             setEditingBooking(null);
//         })
//         .catch(error => {
//             setError(error.message);
//         });
//     };

//     const handleDeleteBooking = (bookingId) => {
//         if (window.confirm('Are you sure you want to delete this booking?')) {
//             fetch(`http://localhost:5000/bookings/${bookingId}`, {
//                 method: 'DELETE',
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to delete booking');
//                 }
//                 return response.json();
//             })
//             .then(() => {
//                 setBookings(prevBookings => 
//                     prevBookings.filter(booking => booking._id !== bookingId)
//                 );
//                 alert('Booking deleted successfully.');
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//         }
//     };

//     // Handle payment selection
//     const handlePaymentClick = (payment) => {
//         setSelectedPayment(payment); // Set the selected payment
//         setPaymentImage(payment.imageUrl || ''); // Set the payment image URL (ensure your payment data includes an imageUrl field)
//     };

//     return (
//         <div className="dashboard-container">
//             <header>
//                 <nav>
//                     <ul>
//                         <li><a href="#users" onClick={() => setActiveTab('users')}>USERS</a></li>
//                         <li><a href="#bookings" onClick={fetchBookings}>BOOKINGS</a></li>
//                         <li><a href="#payments" onClick={fetchPayments}>PAYMENTS</a></li>
//                         <li><a href="#billing" onClick={() => navigate('/billing')}>BILLING</a></li>
//                         <li><a href="#logout" onClick={handleLogout}>LOGOUT</a></li>
//                     </ul>
//                 </nav>
//             </header>

//             <h1>Admin Dashboard</h1>

//             {loadingUsers || (loadingBookings && activeTab === 'bookings') || (loadingPayments && activeTab === 'payments') ? (
//                 <p>Loading data...</p>
//             ) : error ? (
//                 <p>Error: {error}</p>
//             ) : (
//                 <div>
//                     {activeTab === 'users' && users.length > 0 ? (
//                         <div id="users">
//                             <h2>All Users</h2>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Email</th>
//                                         <th>Admin</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {users.map(user => (
//                                         <tr key={user._id}>
//                                             <td>{user.name}</td>
//                                             <td>{user.email}</td>
//                                             <td>{user.isAdmin ? 'Yes' : 'No'}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     ) : (
//                         activeTab === 'users' && <p>No users found.</p>
//                     )}

//                     {activeTab === 'bookings' && bookings.length > 0 ? (
//                         <div id="bookings">
//                             <h2>All Bookings</h2>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Date</th>
//                                         <th>Email</th>
//                                         <th>Phone</th>
//                                         <th>Vehicle</th>
//                                         <th>Equipments</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {bookings.map(booking => (
//                                         <tr key={booking._id}>
//                                             <td>{booking.name}</td>
//                                             <td>{new Date(booking.date).toLocaleDateString()}</td>
//                                             <td>{booking.email}</td>
//                                             <td>{booking.phone}</td>
//                                             <td>{booking.vehicle}</td>
//                                             <td>{booking.implement}</td>
//                                             <td>
//                                                 <div className="actions-container">
//                                                     <button onClick={() => handleEditClick(booking)} className="action-button">Edit</button>
//                                                     <button onClick={() => handleDeleteBooking(booking._id)} className="action-button delete-button">Delete</button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     ) : (
//                         activeTab === 'bookings' && <p>No bookings found.</p>
//                     )}

//                     {activeTab === 'payments' && payments.length > 0 ? (
//                         <div id="payments">
//                             <h2>All Payments</h2>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Email</th>
//                                         <th>Landmark</th>
//                                         <th>transactionId</th>
//                                         <th>Date</th>
                                        

//                                         <th>Method</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {payments.map(payment => (
//                                         <tr key={payment._id} onClick={() => handlePaymentClick(payment)} style={{ cursor: 'pointer' }}>
//                                             <td>{payment.name}</td>
//                                             <td>{payment.email}</td>
//                                             <td>{payment.landmark}</td>
//                                             <td>{payment.transactionId}</td>

//                                             <td>{new Date(payment.date).toLocaleDateString()}</td>
//                                             <td>{payment.method}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>

//                             {/* Display Selected Payment Details and Image */}
//                             {selectedPayment && (
//                                 <div className="payment-details">
//                                     <h3>Payment Details</h3>
//                                     <p><strong>Name:</strong> {selectedPayment.name}</p>
//                                     <p><strong>Email:</strong> {selectedPayment.email}</p>
//                                     <p><strong>Landmark:</strong> {selectedPayment.landmark}</p>
//                                     <p><strong>Date:</strong> {new Date(selectedPayment.date).toLocaleDateString()}</p>
//                                     <p><strong>transactionId:</strong> {selectedPayment.transactionId}</p>
//                                     <p><strong>Method:</strong> {selectedPayment.method}</p>

//                                     {paymentImage && <img src={paymentImage} alt="Payment" style={{ width: '100%', maxWidth: '300px', marginTop: '10px' }} />}
//                                 </div>
//                             )}
//                         </div>
//                     ) : (
//                         activeTab === 'payments' && <p>No payments found.</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Dashboard;

/// properly working above code emegen



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [payments, setPayments] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [loadingBookings, setLoadingBookings] = useState(false);
    const [loadingPayments, setLoadingPayments] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('users');
    const [editingBooking, setEditingBooking] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null); // State for selected payment
    const [paymentImage, setPaymentImage] = useState(''); // State for payment image URL

    const navigate = useNavigate();

    // Fetch users on component mount
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setLoadingUsers(false);
            })
            .catch(error => {
                setError(error.message);
                setLoadingUsers(false);
            });
    }, []);

    // Fetch bookings function
    const fetchBookings = () => {
        if (bookings.length === 0 && !loadingBookings) {
            setLoadingBookings(true);
            fetch('http://localhost:5000/bookings')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch bookings');
                    }
                    return response.json();
                })
                .then(data => {
                    setBookings(data);
                    setLoadingBookings(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoadingBookings(false);
                });
        }
        setActiveTab('bookings');
    };

    // Fetch payments function
    const fetchPayments = () => {
        if (payments.length === 0 && !loadingPayments) {
            setLoadingPayments(true);
            fetch('http://localhost:5000/payments')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch payments');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data); // Log payments data to inspect
                    setPayments(data);
                    setLoadingPayments(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoadingPayments(false);
                });
        }
        setActiveTab('payments');
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const handleEditClick = (booking) => {
        setEditingBooking(booking);
    };

    const handleEditChange = (e) => {
        setEditingBooking({ ...editingBooking, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/bookings/${editingBooking._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editingBooking),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update booking');
            }
            return response.json();
        })
        .then(updatedBooking => {
            setBookings(prevBookings => 
                prevBookings.map(booking => 
                    booking._id === updatedBooking._id ? updatedBooking : booking
                )
            );
            setEditingBooking(null);
        })
        .catch(error => {
            setError(error.message);
        });
    };

    const handleDeleteBooking = (bookingId) => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
            fetch(`http://localhost:5000/bookings/${bookingId}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete booking');
                }
                return response.json();
            })
            .then(() => {
                setBookings(prevBookings => 
                    prevBookings.filter(booking => booking._id !== bookingId)
                );
                alert('Booking deleted successfully.');
            })
            .catch(error => {
                setError(error.message);
            });
        }
    };

    // Handle payment selection
    const handlePaymentClick = (payment) => {
        setSelectedPayment(payment); // Set the selected payment
        setPaymentImage(payment.imageUrl || ''); // Set the payment image URL (ensure your payment data includes an imageUrl field)
    };

    return (
        <div className="dashboard-container">
            <header>
                <nav>
                    <ul>
                        <li><a href="#users" onClick={() => setActiveTab('users')}>USERS</a></li>
                        <li><a href="#bookings" onClick={fetchBookings}>BOOKINGS</a></li>
                        <li><a href="#payments" onClick={fetchPayments}>PAYMENTS</a></li>
                        <li><a href="#billing" onClick={() => navigate('/billing')}>BILLING</a></li>
                        <li><a href="#logout" onClick={handleLogout}>LOGOUT</a></li>
                    </ul>
                </nav>
            </header>

            <h1>Admin Dashboard</h1>

            {loadingUsers || (loadingBookings && activeTab === 'bookings') || (loadingPayments && activeTab === 'payments') ? (
                <p>Loading data...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    {activeTab === 'users' && users.length > 0 ? (
                        <div id="users">
                            <h2>All Users</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        activeTab === 'users' && <p>No users found.</p>
                    )}

                    {activeTab === 'bookings' && bookings.length > 0 ? (
                        <div id="bookings">
                            <h2>All Bookings</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Vehicle</th>
                                        <th>Equipments</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map(booking => (
                                        <tr key={booking._id}>
                                            <td>{booking.name}</td>
                                            <td>{new Date(booking.date).toLocaleDateString()}</td>
                                            <td>{booking.email}</td>
                                            <td>{booking.phone}</td>
                                            <td>{booking.vehicle}</td>
                                            <td>{booking.implement}</td>
                                            <td>
                                                <div className="actions-container">
                                                    <button onClick={() => handleEditClick(booking)} className="action-button">Edit</button>
                                                    <button onClick={() => handleDeleteBooking(booking._id)} className="action-button delete-button">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Edit Booking Form */}
                            {editingBooking && (
                                <div className="edit-booking-form">
                                    <h3>Edit Booking</h3>
                                    <form onSubmit={handleEditSubmit}>
                                        <label>
                                            Name:
                                            <input
                                                type="text"
                                                name="name"
                                                value={editingBooking.name}
                                                onChange={handleEditChange}
                                            />
                                        </label>
                                        <label>
                                            Date:
                                            <input
                                                type="date"
                                                name="date"
                                                value={new Date(editingBooking.date).toISOString().split('T')[0]}
                                                onChange={handleEditChange}
                                            />
                                        </label>
                                        <label>
                                            Email:
                                            <input
                                                type="email"
                                                name="email"
                                                value={editingBooking.email}
                                                onChange={handleEditChange}
                                            />
                                        </label>
                                        <label>
                                            Phone:
                                            <input
                                                type="text"
                                                name="phone"
                                                value={editingBooking.phone}
                                                onChange={handleEditChange}
                                            />
                                        </label>
                                        <label>
                                            Vehicle:
                                            <input
                                                type="text"
                                                name="vehicle"
                                                value={editingBooking.vehicle}
                                                onChange={handleEditChange}
                                            />
                                        </label>
                                        <label>
                                            Equipments:
                                            <input
                                                type="text"
                                                name="implement"
                                                value={editingBooking.implement}
                                                onChange={handleEditChange}
                                            />
                                        </label>
                                        <button type="submit" className="action-button">Save Changes</button>
                                        <button onClick={() => setEditingBooking(null)} className="action-button cancel-button">Cancel</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    ) : (
                        activeTab === 'bookings' && <p>No bookings found.</p>
                    )}

                    {activeTab === 'payments' && payments.length > 0 ? (
                        <div id="payments">
                            <h2>All Payments</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Landmark</th>
                                        <th>transactionId</th>
                                        <th>Date</th>
                                        <th>Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.map(payment => (
                                        <tr key={payment._id} onClick={() => handlePaymentClick(payment)} style={{ cursor: 'pointer' }}>
                                            <td>{payment.name}</td>
                                            <td>{payment.email}</td>
                                            <td>{payment.landmark}</td>
                                            <td>{payment.transactionId}</td>
                                            <td>{new Date(payment.date).toLocaleDateString()}</td>
                                            <td>{payment.method}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Display Selected Payment Details and Image */}
                            {selectedPayment && (
                                <div className="payment-details">
                                    <h3>Payment Details</h3>
                                    <p><strong>Name:</strong> {selectedPayment.name}</p>
                                    <p><strong>Email:</strong> {selectedPayment.email}</p>
                                    <p><strong>Landmark:</strong> {selectedPayment.landmark}</p>
                                    <p><strong>Date:</strong> {new Date(selectedPayment.date).toLocaleDateString()}</p>
                                    <p><strong>transactionId:</strong> {selectedPayment.transactionId}</p>
                                    <p><strong>Method:</strong> {selectedPayment.method}</p>

                                    {paymentImage && <img src={paymentImage} alt="Payment" style={{ width: '100%', maxWidth: '300px', marginTop: '10px' }} />}
                                </div>
                            )}
                        </div>
                    ) : (
                        activeTab === 'payments' && <p>No payments found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dashboard;

