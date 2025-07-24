import React from 'react'
import './News.css';
import truck from '../../assets/truck.jpg';
import ship from '../../assets/ship.jpg';
import plane from '../../assets/plane.jpg';
import container from '../../assets/containers.jpg';

function News() {
  const newsItems = [
    {
      id: 1,
      date: 'May 26',
      image: truck, 
      title: 'CURABITUR LOREM UISM QUIS',
      author: 'Admin',
      comments: '15',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non dolor id nisl',
      isPrimary: true, 
    },
    {
      id: 2,
      date: 'May 22',
      image: ship, 
      title: 'CURABITUR LOREM UISM QUIS',
      author: 'Admin',
      comments: '15',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non dolor id nisl',
      isPrimary: false,
    },
    {
      id: 3,
      date: 'May 20',
      image: plane, 
      title: 'CURABITUR LOREM UISM QUIS',
      author: 'Admin',
      comments: '15',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non dolor id nisl',
      isPrimary: false,
    },
    {
      id: 4,
      date: 'May 15',
      image: container, 
      title: 'CURABITUR LOREM UISM QUIS',
      author: 'Admin',
      comments: '15',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non dolor id nisl',
      isPrimary: false,
    },
  ];
  return (
    <div className="news-section container">
      <h2 className="section-title">LATEST NEWS</h2>
      <div className="section-header-details">
        <div className="blue-square"></div> 
        <p className="section-subtitle">INTEGER CONGUE ELIT</p>
      </div>
      <div className="news-grid">
        {newsItems.map((item) => (
          <div key={item.id} className={`news-item ${item.isPrimary ? 'primary-item' : ''}`}>
            <div className="news-image-container">
              <img src={item.image} alt="News" className="news-image" />
              <div className="news-date">{item.date}</div>
            </div>
            <div className="news-content">
              <h3>{item.title}</h3>
              <div className="news-meta">
                <span>{item.author}</span>
                <span>{item.comments}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News