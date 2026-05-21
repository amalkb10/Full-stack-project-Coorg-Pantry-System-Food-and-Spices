import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Are your products 100% organic and natural?",
      answer: "Yes, our coffee, honey, and spices are sourced directly from forest estates in Coorg that strictly prioritize natural, sustainable, and eco-friendly farming practices without the use of harsh synthetic chemicals."
    },
    {
      question: "Do you ship across India and internationally?",
      answer: "We carefully package all our artisanal goods and deliver them pan-India within 3-7 business days. For international shipping or bulk international orders, please reach out to us via our Contact page."
    },
    {
      question: "Is your honey raw and unprocessed?",
      answer: "Absolutely. Our Pure Forest Honey is ethically harvested by indigenous communities deep within the Western Ghats. It is only gently cold-filtered and never heated or pasteurized, preserving all its natural enzymes and pollen."
    },
    {
      question: "What makes your Kodava-inspired fruit wines unique?",
      answer: "Our wines are crafted using traditional Kodava family recipes passed down over generations. We utilize locally grown, seasonal exotic fruits fermented naturally in small batches to capture the authentic, rustic flavors of Coorg."
    },
    {
      question: "Can I visit your coffee estates in Coorg?",
      answer: "Yes, we would love to host you! We offer personalized, guided Estate Tours where you can walk through the misty plantations and witness the journey from crop to cup. Visit our Services page to book an experience."
    },
    {
      question: "Do you offer corporate or wedding gifting hampers?",
      answer: "We certainly do. We curate exquisite, sustainable wicker hampers filled with our premium selections perfect for corporate gifting or weddings. We can customize the selection based on your requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about our products, sourcing, and services.</p>
      </div>

      <div className="faq-container">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-toggle-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div 
                className="faq-answer"
                style={{ 
                  maxHeight: activeIndex === index ? '300px' : '0px',
                  paddingTop: activeIndex === index ? '15px' : '0px',
                  paddingBottom: activeIndex === index ? '25px' : '0px'
                 }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="faq-footer">
        <h2>Still have questions?</h2>
        <p>If you cannot find the answer to your question in our FAQ, you can always reach out to us.</p>
        <button className="faq-contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
      </div>
    </div>
  );
}

export default FAQ;