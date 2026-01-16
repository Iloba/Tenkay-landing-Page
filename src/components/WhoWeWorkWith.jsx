import React from 'react';
import workWithUsImage from '../assets/images/work_with_us.png';

const WhoWeWorkWith = () => {
    return (
        <section id="who-we-work-with" className="section-spacing" style={{ backgroundColor: '#fafafa' }}>
            <div className="container grid-2">

                {/* Text Content */}
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Who We Work With</h2>
                    <p style={{ fontSize: '1.1rem' }}>
                        Tenkay is built for companies that:
                    </p>
                    <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span> Have a real product or service
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span> Operate in competitive markets
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span> Already see demand, but SEO isn’t pulling its weight
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span> Want measurable business outcomes, not reports
                        </li>
                    </ul>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '2rem' }}>Industries we specialize in:</h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['E-commerce', 'SaaS', 'Logistics & Freight'].map(industry => (
                            <span key={industry} style={{
                                padding: '0.5rem 1rem',
                                border: '1px solid var(--border-color)',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                backgroundColor: 'white'
                            }}>
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={workWithUsImage}
                        alt="Team Collaboration"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

export default WhoWeWorkWith;
