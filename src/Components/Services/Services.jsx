import React from 'react'
import './Services.css';
import Services1 from '../../assets/services2.jpg';
import Services2 from '../../assets/services4.jpg';

const Services = () => {
  return (
        <section className="services-section container">
      <h3 className="subtitle">Real Solution, Real Fast !</h3>
      <h2 className="section-title">Best Global Logistics Solutions.</h2>

      <div className="services-grid">
        <div className="service-card">
          <div className="card-image-container">
            <img src={Services1} alt="Air Freight Services" className="card-image" />
            <div className="card-icon air-freight-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.3L19.5 8.2V15.8L12 19.7L4.5 15.8V8.2L12 4.3ZM12 10.5L18 7.5L12 4.5L6 7.5L12 10.5ZM12 12.5V17.5L18 14.5V9.5L12 12.5ZM6 9.5V14.5L12 17.5V12.5L6 9.5Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Air Freight Services</h3>
            <p className="card-description">
              At our Auto Service garage, we are fully appreciate how difficult occur
              it is for people to find.
            </p>
            <a href="#" className="read-more">
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Service Card 2: Drone Services */}
        <div className="service-card">
          <div className="card-image-container">
            <img src={Services2} alt="Drone Services" className="card-image" />
            <div className="card-icon drone-icon">
              {/* SVG or Icon for drone */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1C8.686 1 6 3.686 6 7C6 10.314 12 21 12 21C12 21 18 10.314 18 7C18 3.686 15.314 1 12 1ZM12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7C14 8.10457 13.1046 9 12 9Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Drone Services</h3>
            <p className="card-description">
              These are unique and often they differ from one industry to the
              other. Our logistics expertise.
            </p>
            <a href="#" className="read-more">
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-text">
        <p>Logistic & Transport Solutions Saves Your Time. <span>Finds Your Solutions &rarr;</span></p>
        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Services