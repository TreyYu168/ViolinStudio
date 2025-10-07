import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        <p>© Re-Designed by an idiot named Trey</p>
                    </div>
                    <div className="footer-icons">
                        <a href="#" className="social-icon">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="social-icon">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="social-icon">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
