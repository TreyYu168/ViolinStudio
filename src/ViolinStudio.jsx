// ViolinStudio.jsx
import React from 'react';
import { Music } from 'lucide-react';
import './assets/ViolinStudio.css';

const ViolinStudio = () => {
    return (
        <div className="violin-studio">

            {/* Banner */}
            <section className="banner">
                <div className="banner-container">
                    <h1 className="banner-title">Harmony by Yu Violin Studio</h1>
                </div>
            </section>

            {/* Staff Section */}
            <section className="staff-section">
                <div className="section-container">
                    <header className="section-header">
                        <h2 className="section-title">Meet the Staff</h2>
                        <p className="section-subtitle">The blind leading the blind</p>
                    </header>

                    <div className="staff-grid">
                        <div className="staff-card">
                            <div className="staff-image">
                                <Music size={48} className="staff-icon" />
                            </div>
                            <h3 className="staff-name">Nancy Hernandez</h3>
                            <p className="staff-role">Violin Teacher</p>
                        </div>

                        <div className="staff-card">
                            <div className="staff-image">
                                <img src={"src/assets/images/Rhea Chan.jpg"} alt={"Image of Rhea Chan"}/>
                            </div>
                            <h3 className="staff-name">Rhea Chan</h3>
                            <p className="staff-role">Violin Teacher</p>
                        </div>

                        <div className="staff-card">
                            <div className="staff-image">
                                <img src={"src/assets/images/Trey Yu.jpg"} alt={"Image of Trey Yu"}/>
                            </div>
                            <h3 className="staff-name">Trey Yu</h3>
                            <p className="staff-role">Tech Idiot</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="section-container">
                    <header className="section-header">
                        <h2 className="section-title">Services</h2>
                        <p className="section-subtitle">Because we all need something a little different</p>
                    </header>

                    <div className="services-grid">
                        <article className="service-card">
                            <div className="service-image service-image-1">
                                <Music size={80} className="service-icon" />
                            </div>
                            <div className="service-content">
                                <header className="service-header">
                                    <h3 className="service-title">Violin Lessons</h3>
                                </header>
                                <p className="service-text">Lessons for skill levels from never touched an instrument to undergraduates in University, everyone is welcome to take a sample lesson to see if our professors suit you</p>
                                <footer>
                                    <button className="btn-primary">Contact Us</button>
                                </footer>
                            </div>
                        </article>

                        <article className="service-card">
                            <div className="service-image service-image-2">
                                <span className="service-emoji">🎼</span>
                            </div>
                            <div className="service-content">
                                <header className="service-header">
                                    <h3 className="service-title">Music Theory Lessons</h3>
                                </header>
                                <p className="service-text">Music theory and its understanding is key fundamental to becoming a good musician. Everyone will receive the basics during lessons, but more focused lessons can amplify your playing skills</p>
                                <footer>
                                    <button className="btn-primary">Contact Us</button>
                                </footer>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViolinStudio;