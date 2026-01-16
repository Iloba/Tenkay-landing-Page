import React from 'react';
import heroImage from '../assets/images/hero_image.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section-spacing" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
            <div className="container grid-2">
                <motion.div
                    className="text-center-mobile"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
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
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
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
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
