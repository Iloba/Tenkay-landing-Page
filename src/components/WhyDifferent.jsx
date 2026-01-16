import React from 'react';

const WhyDifferent = () => {
    return (
        <section className="section-spacing">
            <div className="container grid-2">
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Tenkay Is Different</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                        Most SEO agencies optimize for rankings. <br />
                        <strong>We optimize for:</strong>
                    </p>
                    <ul style={{ fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                        <li style={{ borderLeft: '3px solid var(--brand-secondary)', paddingLeft: '1rem' }}>Revenue impact</li>
                        <li style={{ borderLeft: '3px solid var(--brand-secondary)', paddingLeft: '1rem' }}>Buyer intent</li>
                        <li style={{ borderLeft: '3px solid var(--brand-secondary)', paddingLeft: '1rem' }}>Conversion paths</li>
                        <li style={{ borderLeft: '3px solid var(--brand-secondary)', paddingLeft: '1rem' }}>Long-term compounding growth</li>
                    </ul>
                    <p style={{ color: 'var(--text-light)' }}>
                        We don’t guess. We leverage competitor momentum, validated keywords, and proven page structures, then execute better.
                    </p>
                </div>

                <div className="tenkay-approach-card">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>The Tenkay Approach</h3>
                    <p style={{ color: 'white', marginBottom: '2rem' }}>
                        Traditional agencies focus on traffic volume. We focus on traffic value.
                    </p>
                    {/* Visual graphic placeholder or clean stat */}
                    <div className="flex-between" style={{ marginTop: '2rem', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Revenue</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)' }}>First Focus</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Rankings</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)' }}>Outcome</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyDifferent;
