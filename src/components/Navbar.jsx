import React, { useState } from 'react';
import logo from '../assets/images/ten-kay-png.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                {/* Logo */}
                <div style={{ zIndex: 1001, display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo}
                        alt="Tenkay"
                        style={{
                            height: '60px', /* Increased from 40px based on previous context, or keeping consistent */
                            width: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </div>

                {/* Hamburger */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    style={{ zIndex: 1001 }}
                >
                    {isOpen ? <X size={40} color="var(--brand-primary)" /> : <Menu size={40} color="var(--text-primary)" />}
                </button>

                {/* Links */}
                <div className={`nav-content ${isOpen ? 'open' : ''}`}>
                    <ul style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', fontWeight: 500 }}>
                        <li><a href="#who-we-work-with" onClick={() => setIsOpen(false)}>Who We Work With</a></li>
                        <li><a href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</a></li>
                        <li><a href="#industries" onClick={() => setIsOpen(false)}>Industries</a></li>
                        <li><a href="#results" onClick={() => setIsOpen(false)}>Results</a></li>
                    </ul>
                    <a href="#contact" className="btn" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }} onClick={() => setIsOpen(false)}>
                        Book a Strategy Call
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
