import React from 'react';
import workWithUsImage from '../assets/images/work_with_us.jpg';
import { motion } from 'framer-motion';

const WhoWeWorkWith = () => {
    return (
        <section id="who-we-work-with" className="section-spacing" style={{ backgroundColor: '#fafafa' }}>
            <div className="container grid-2">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Who We Work With</h2>
                    <p style={{ fontSize: '1.1rem' }}>
                        Tenkay is built for companies that:
                    </p>
                    <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            'Have a real product or service',
                            'Operate in competitive markets',
                            'Already see demand, but SEO isn’t pulling its weight',
                            'Want measurable business outcomes, not reports'
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                            >
                                <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span> {item}
                            </motion.li>
                        ))}
                    </ul>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '2rem' }}>Industries we specialize in:</h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['E-commerce', 'SaaS', 'Logistics & Freight'].map((industry, i) => (
                            <motion.span key={industry}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + (i * 0.1), duration: 0.4 }}
                                style={{
                                    padding: '0.5rem 1rem',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    backgroundColor: 'white'
                                }}>
                                {industry}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
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
                </motion.div>

            </div>
        </section>
    );
};

export default WhoWeWorkWith;
