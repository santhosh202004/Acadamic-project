import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin'); // Clear isAdmin flag
        navigate('/login'); // Redirect to login page
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
