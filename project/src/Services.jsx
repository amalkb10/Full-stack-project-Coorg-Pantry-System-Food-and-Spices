import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Premium Services</h1>
        <p>Beyond our pantry, we offer exclusive experiences and curated solutions tailored for you.</p>
      </div>

      <div className="services-container">
        <div className="service-row">
          <div className="service-image-wrapper">
            <img src="./service_tour.png" alt="Estate Tours" className="service-image" />
          </div>
          <div className="service-content">
            <div className="service-number">01</div>
            <h2>Guided Estate Tours</h2>
            <p>
              Immerse yourself in the breathtaking beauty of Coorg. Walk through our lush, misty coffee plantations and witness the journey of our harvest from crop to cup.
            </p>
            <p>
              Our expert guides will share the rich heritage of Kodava farming practices, making it an unforgettable educational escape.
            </p>
            <button className="service-btn">Book a Tour</button>
          </div>
        </div>

        <div className="service-row reverse-row">
          <div className="service-content">
            <div className="service-number">02</div>
            <h2>Corporate & Event Gifting</h2>
            <p>
              Express your gratitude with the pure essence of the Western Ghats. Our beautifully crafted artisanal wicker hampers are completely customizable for weddings, corporate events, and festivals.
            </p>
            <p>
              Packed with premium roasted coffee beans, wild forest honey, and exotic spices, our gifts leave a lasting, sustainable impression.
            </p>
            <button className="service-btn">Enquire Now</button>
          </div>
          <div className="service-image-wrapper">
            <img src="./service_gifting.png" alt="Corporate Gifting" className="service-image" />
          </div>
        </div>

        <div className="service-row">
          <div className="service-image-wrapper">
            <img src="./service_tasting.png" alt="Tasting Sessions" className="service-image" />
          </div>
          <div className="service-content">
            <div className="service-number">03</div>
            <h2>Artisanal Tasting Sessions</h2>
            <p>
              Delve into the subtle flavor profiles of Coorg. Join our exclusive tasting sessions featuring dark roasted espressos, raw honey varieties, and our signature Kodava-inspired fruit wines.
            </p>
            <p>
              Hosted in a rustic wooden setting, you'll learn the art of pairing local delicacies, guided by our master blenders.
            </p>
            <button className="service-btn">Reserve a Seat</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;