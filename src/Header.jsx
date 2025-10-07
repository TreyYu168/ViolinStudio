// Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-content">
                    <a href="/" className="logo">Welcome</a>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        <a href="/" className="nav-link">Home</a>
                        <a href="/contact" className="nav-link">Contact Us</a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="menu-button"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="nav-mobile">
                        <a href="/" className="nav-link">Home</a>
                        <a href="/contact" className="nav-link">Contact Us</a>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;