import React,  { useState } from 'react'
import './Testimonial.css';

const Testimonial = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const testimonials = [
    {
      quote: "Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor se felis ac mauris. Pellentesque inpyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada mauris etug met Curabitur laoreet convallis nisl pellentesque bibendum.",
      author: "JOHN DEO",
      title: "Managing Director",
    },
  ];

  const faqItems = [
    {
      question: "Dui ac hendrerit elementum quam ipsum auctor lorem",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Mauris vel magna a est lobortis volutpat",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
      answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      question: "Nulla scelerisque dui hendrerit elementum quam",
      answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
  ];

  const currentTestimonial = testimonials[0];

  return (
        <section className="testimonial-section container">
      <div className="container">
        {/* Trusted Clients Section */}
        <div className="left-column">
          <h2 className="section-title">TRUSTED CLIENTS</h2>
          <p className="section-subtitle">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>

          <div className="testimonial-card">
            <div className="quote-icon-wrapper">
              <span className="quote-icon">“</span>
            </div>
            <p className="testimonial-quote">
              {currentTestimonial.quote}
            </p>
          </div>

          <div className="testimonial-navigation">
            <div className="nav-arrows">
              <button className="arrow-button">&lt;</button>
              <button className="arrow-button">&gt;</button>
            </div>
            <div className="author-info">
              <div className="author-name">{currentTestimonial.author}</div>
              <div className="author-title">{currentTestimonial.title}</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section (Accordion) */}
        <div className="right-column">
          <h2 className="section-title">WHY CHOOSE US</h2>
          <p className="section-subtitle">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>

          <div className="accordion-wrapper">
            {faqItems.map((item, index) => (
              <div key={index} className="accordion-item">
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <span className="accordion-question">{item.question}</span>
                  <button className="accordion-toggle-button">
                    {activeAccordion === index ? '−' : '+'}
                  </button>
                </div>
                {activeAccordion === index && (
                  <div className="accordion-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial