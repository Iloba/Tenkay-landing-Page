import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 2rem', borderTop: '1px solid var(--border-color)', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>&copy; {new Date().getFullYear()} Tenkay. All rights reserved.</div>
                <div>
                    {/* Socials or extra links could go here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
