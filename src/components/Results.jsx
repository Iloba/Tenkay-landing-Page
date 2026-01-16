import React from 'react';
import { Activity, Zap, MousePointerClick, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Results = () => {
    const resultsData = [
        {
            text: 'Clear visibility into how SEO impacts revenue',
            icon: <Activity size={32} color="var(--brand-primary)" />
        },
        {
            text: 'Faster wins from existing pages',
            icon: <Zap size={32} color="var(--brand-primary)" />
        },
        {
            text: 'Better conversion rates from organic traffic',
            icon: <MousePointerClick size={32} color="var(--brand-primary)" />
        },
        {
            text: 'Sustainable growth without increasing ad spend',
            icon: <TrendingUp size={32} color="var(--brand-primary)" />
        }
    ];

    return (
        <section id="results" className="section-spacing" style={{ backgroundColor: '#fafafa' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    What Results Look Like
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    {resultsData.map((item, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            style={{
                                padding: '2rem',
                                backgroundColor: 'white',
                                border: '1px solid #eaeaea',
                                borderRadius: '8px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1.5rem',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                                e.currentTarget.style.borderColor = 'var(--brand-secondary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#eaeaea';
                            }}
                        >
                            <div style={{
                                padding: '1rem',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(59, 178, 182, 0.1)', // Light brand-primary background
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 600 }}
                >
                    SEO becomes a growth channel, not a cost center.
                </motion.p>
            </div>
        </section>
    );
};

export const FinalCTA = () => {
    return (
        <section id="contact" className="section-spacing" style={{ textAlign: 'center', padding: '8rem 2rem' }}>
            <motion.div
                className="container"
                style={{ maxWidth: '800px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Turn SEO Into Revenue?</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    If your SEO traffic isn’t producing real business results, let’s fix that.
                </p>
                <a href="#contact" className="btn" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem' }}>Book a Strategy Call Now</a>
            </motion.div>
        </section>
    )
}

export default Results;
