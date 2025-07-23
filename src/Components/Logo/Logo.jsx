import React from 'react'
import './Logo.css';
import logo1 from '../../assets/logo_1.png'; 
import logo2 from '../../assets/logo_2.png';
import logo3 from '../../assets/logo_3.png';
import logo4 from '../../assets/logo_4.png';
import logo5 from '../../assets/logo_5.png';

const Logo = () => {
    const logos = [
        { name: 'Logo_1', src: logo1 }, 
        { name: 'Logo_2', src: logo2 },
        { name: 'Logo_3', src: logo3 },
        { name: 'Logo_4', src: logo4 },
        { name: 'Logo_5', src: logo5 },
    ];
    return (
        <section className="logo-section">
            <div className="logo-container">
                {logos.map((logo, index) => (
                    <div className="logo-item" key={index}>
                        <img
                            src={logo.src} 
                            alt={logo.name}
                            className="client-logo"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/150x50/cccccc/333333?text=${logo.name.split(' ')[0]}`;
                                e.target.style.filter = 'none';
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Logo