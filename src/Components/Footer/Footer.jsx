import React from 'react'
import './Footer.css';
import footer1 from '../../assets/footer1.jpg';
import footer2 from '../../assets/footer2.jpg';
import footer3 from '../../assets/footer3.jpg';
import footer4 from '../../assets/footer4.jpg';


const Footer = () => {
  return (
 <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
            <section className="newsletter-section">
              <div className="container newsletter-content">
                <div className="newsletter-text">
                  <h2>Weekly Newsletter</h2>
                  <p>There are many variations of passages of Lorem Ipsum available.</p>
                </div>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter Your Mail" />
                  <button className="subscribe-button">SUBSCRIBE</button>
                </div>
              </div>
            </section>
          <div className="footer-widgets">
            <div className="widget about-widget">
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul>
                <li><i className="fa fa-phone"></i> (+94) 71 883 2011</li>
                <li><i className="fa fa-map-marker"></i> Kurunegala, Srilanka.</li>
              </ul>
            </div>
            <div className="widget latest-news-widget">
              <h3>Latest News</h3>
              <ul>
                <li>
                  <i className="fa fa-caret-right"></i>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                  <span>5 Minutes Ago</span>
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                  <span>5 Minutes Ago</span>
                </li>
              </ul>
            </div>
            <div className="widget customer-service-links">
              <h3>Customer Service</h3>
              <ul>
                <li><i className="fa fa-life-ring"></i> Support Forums</li>
                <li><i className="fa fa-comments"></i> Communication</li>
                <li><i className="fa fa-question-circle"></i> FAQs</li>
                <li><i className="fa fa-file-text"></i> Privacy Policy</li>
                <li><i className="fa fa-gavel"></i> Rules & Condition</li>
                <li><i className="fa fa-envelope"></i> Contact Us</li>
              </ul>
            </div>
            <div className="widget customer-service-images">
              <h3>Customer Service</h3>
              <div className="image-grid">
                <img src={footer1} alt="Customer Service 1" />
                <img src={footer2} alt="Customer Service 2" />
                <img src={footer3} alt="Customer Service 3" />
                <img src={footer4} alt="Customer Service 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            Copyright © 2025 All Rights Reserved. Site By TKA Products®
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-behance"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer