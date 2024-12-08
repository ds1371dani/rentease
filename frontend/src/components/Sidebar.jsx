import React from 'react';
import { FaCalendar, FaFileContract, FaMoneyCheckAlt, FaHome } from 'react-icons/fa';
// import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Rental Service</h2>
            <ul className="nav-links">
                <li><FaHome /> My Rentals</li>
                <li><FaCalendar /> Calendar</li>
                <li><FaFileContract /> Agreements</li>
                <li><FaMoneyCheckAlt /> Payments</li>
            </ul>
        </div>
    );
}

export default Sidebar;
