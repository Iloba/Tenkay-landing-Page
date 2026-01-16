import React from 'react';

const CoreOffer = () => {
    return (
        <section id="how-it-works" className="section-spacing">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Our Core Offer</h2>
                <p style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '4rem', color: 'var(--text-secondary)' }}>
                    Revenue SEO Sprint + Monthly Growth
                </p>

                <div className="grid-2" style={{ alignItems: 'stretch', gap: '2rem' }}>
                    {/* Phase 1 */}
                    <div style={{ padding: '2.5rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Phase 1: Revenue SEO Sprint</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Goal: Identify exactly where SEO revenue is being lost, and how to recover it fast.</p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                            {[
                                { title: 'SEO Revenue Audit', desc: 'We uncover why your current SEO isn’t generating customers.' },
                                { title: 'Keyword-to-Revenue Mapping', desc: 'We map keywords to pages and revenue actions.' },
                                { title: 'Pages That Should Be Converting', desc: 'Identify high-traffic pages with low conversion, fixed.' },
                                { title: 'Competitor Revenue Gap Analysis', desc: 'Reverse-engineer what competitors rank for and monetize.' },
                                { title: '90-Day Growth Roadmap', desc: 'A clear, prioritized plan showing what to fix, build, and ignore.' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{item.title}</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>"This sprint gives you clarity and immediate execution."</p>
                    </div>

                    {/* Phase 2 */}
                    <div style={{ padding: '2.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Phase 2: SEO Growth</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Goal: Turn insights into revenue-producing SEO assets.</p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                            {[
                                'Fixing and optimizing money pages',
                                'Creating BOFU and MOFU content only',
                                'Designing internal linking paths that push users to convert',
                                'Building scalable, programmatic pages where it makes sense',
                                'Improving conversion rates from organic traffic'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                                    <span>→</span> {item}
                                </li>
                            ))}
                        </ul>

                        <p style={{ fontWeight: 600, marginBottom: '2rem' }}>
                            No blogging for vanity keywords. No busywork.
                        </p>

                        <div style={{ textAlign: 'center' }}>
                            <a href="#contact" className="btn" style={{ width: '100%' }}>Book A Strategy Call</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreOffer;
