import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/crops">Crop Management</Link></li>
        <li><Link to="/fields">Field Monitoring</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
