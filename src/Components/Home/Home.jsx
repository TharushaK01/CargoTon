import React from 'react'
import './Home.css'
import services from '../../assets/Services3.jpg'

const Home = () => {
  return (
    <div className="home container">
      <div className="text-section">
      <span className="logistic">LOGISTIC</span>
      <h1>Best Shipping <br/>
        <span style={{ color: '#ffbb00', fontWeight: 'bold' }}>Partner</span></h1>
      <p>
        Amet, tempus egestas facililis volutpat viverra molestie lobortis posuere mancenas, molestie lobortis posuere mancenas. Eget sapien, gravida nequi.
      </p>
      <button className="btn_2">Discover More</button>
      </div>
      <div className="image-section">
        <img src={services} alt="Shipping Crane" />
      </div>
    <div className="pagination">
        <span>2 / 2</span>
        <button className="arrow left">&larr;</button>
        <button className="arrow right">&rarr;</button>
      </div>
    </div>
  )
}

export default Home