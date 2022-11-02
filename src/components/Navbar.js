import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar--title">Orchestra</h2>
            <ul className="navbar--list">
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Find pieces</a></li>
            </ul>
        </nav>
    )
}