import React from 'react';
import { motion } from 'framer-motion';

const ExecutionCard = ({ title, focusItems, metric, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 * index, duration: 0.5 }}
        style={{ flex: 1, padding: '2rem', borderTop: '4px solid var(--brand-primary)', backgroundColor: 'white' }}
    >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{title} SEO</h3>
        <ul style={{ marginBottom: '2rem', minHeight: '180px' }}>
            {focusItems.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    • {item}
                </li>
            ))}
        </ul>
        <div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#999', marginBottom: '0.5rem' }}>Primary Metric</div>
            <div style={{ fontWeight: 600 }}>{metric}</div>
        </div>
    </motion.div>
);

const HowWeExecute = () => {
    return (
        <section id="industries" className="section-spacing" style={{ backgroundColor: '#f0f0f0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    How We Execute
                </motion.h2>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <ExecutionCard
                        index={0}
                        title="E-commerce"
                        focusItems={[
                            'Category and collection pages that don’t rank',
                            'Product pages that rank but don’t convert',
                            'International SEO for US and EU markets',
                            'Category expansion pages that unlock new revenue'
                        ]}
                        metric="Revenue per organic session"
                    />
                    <ExecutionCard
                        index={1}
                        title="SaaS"
                        focusItems={[
                            'Use-case pages that capture demand',
                            'Comparison pages (X vs Y)',
                            'Alternatives pages with strong buying intent',
                            'Feature-led BOFU pages tied to outcomes'
                        ]}
                        metric="Demos, signups, and sales-qualified leads"
                    />
                    <ExecutionCard
                        index={2}
                        title="Logistics & Freight"
                        focusItems={[
                            'Service + location pages',
                            'Route-based and solution-based pages',
                            'High-intent commercial keywords competitors already monetize',
                            'Authority signals that build trust fast'
                        ]}
                        metric="Qualified inbound leads"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                >
                    <a href="#contact" className="btn">Book A Strategy Call</a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowWeExecute;
