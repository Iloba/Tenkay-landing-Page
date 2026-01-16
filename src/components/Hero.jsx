import React from 'react';
import heroImage from '../assets/images/hero_image.jpg';

const Hero = () => {
    return (
        <section className="section-spacing" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
            <div className="container grid-2">
                <div className="text-center-mobile">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                        We Turn SEO Into Revenue
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem', maxWidth: '500px' }}>
                        Tenkay helps E-commerce, SaaS, and Logistics companies turn underperforming SEO into predictable revenue.
                    </p>
                    <p style={{ marginBottom: '2.5rem', color: 'var(--text-light)', maxWidth: '500px' }}>
                        We don’t chase vanity keywords or publish content for the sake of it. We focus on high-intent pages that directly impact revenue.
                    </p>
                    <a href="#contact" className="btn">
                        Book A Strategy Call Now
                    </a>
                </div>

                {/* Hero Image */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={heroImage}
                        alt="SEO Revenue Dashboard"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
