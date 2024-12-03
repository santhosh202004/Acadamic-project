import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Retrieve and parse the isAdmin flag

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    {isAdmin && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
