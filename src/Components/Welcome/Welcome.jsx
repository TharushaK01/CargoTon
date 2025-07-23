import React from 'react'
import './Welcome.css'
import welcome1 from '../../assets/welcome1.jpg';
import welcome2 from '../../assets/welcome2.jpg';

const Welcome = () => {
  return (
    <section className="logistics-section container">
      <div className="image-container">
        <img src={welcome1} alt="welcome with clipboard" className="welcome-image top" />
        <img src={welcome2} alt="welcome with pallet" className="welcome-image bottom" />
      </div>
      <div className="content-container">
        <div className="text-content">
          <h2>TransMax Logistics <br/>Around <span>the World</span></h2>
          <p>
            Transmax is the world's driving worldwide coordinations supplier — we uphold industry and exchange the worldwide exchange of merchandise through land transport.
          </p>
          <p>
            Our work added administrations ensure the progression of products, forms reliably and supply chains stay lean and streamlined for progress.
          </p>
          <button className="more-btn">More About Us</button>
        </div>
        <div className="clients-badge">
          <span>15,350+</span>
          <p>Clients Worldwide</p>
        </div>
      </div>
      
    </section>
  );
}

export default Welcome