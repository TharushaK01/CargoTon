import React from 'react'
import './Stat.css';

const Stat = () => {
  return (
     <section className="stats-section">
      <div className="stat-item">
        <div className="stat-content"> 
          <div className="stat-number">890</div>
          <div className="stat-description">Delivered packages</div>
        </div>
        <div className="background-number">890</div>
      </div>
      <div className="stat-item">
        <div className="stat-content">
          <div className="stat-number">137</div>
          <div className="stat-description">Countries covered</div>
        </div>
        <div className="background-number">137</div>
      </div>
      <div className="stat-item">
        <div className="stat-content">
          <div className="stat-number">740</div>
          <div className="stat-description">Tons of Goods</div>
        </div>
        <div className="background-number">740</div>
      </div>
      <div className="stat-item">
        <div className="stat-content">
          <div className="stat-number">600</div>
          <div className="stat-description">Satisfied Clients</div>
        </div>
        <div className="background-number">600</div>
      </div>
    </section>
  )
}

export default Stat