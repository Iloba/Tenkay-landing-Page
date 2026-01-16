import React from 'react';

const ExecutionCard = ({ title, focusItems, metric }) => (
    <div style={{ flex: 1, padding: '2rem', borderTop: '4px solid var(--brand-primary)', backgroundColor: 'white' }}>
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
    </div>
);

const HowWeExecute = () => {
    return (
        <section id="industries" className="section-spacing" style={{ backgroundColor: '#f0f0f0' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>How We Execute</h2>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <ExecutionCard
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

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="#contact" className="btn">Book A Strategy Call</a>
                </div>
            </div>
        </section>
    );
};

export default HowWeExecute;
