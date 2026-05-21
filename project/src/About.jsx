import React from 'react';
import './About.css';

function About() {

  const why = [
    {
      image:
        "./directly.png",
      whytext: "DIRECTLY SOURCED",
    },
    {
      image:
        "./precent.png",
      whytext: "100% PURE & NATURAL",
    },
    {
      image:
        "./cultral.png",
      whytext: "CULTURAL HERITAGE",
    },
  ];

  return (
    <div className="about-page">
      <div className="about-hero-section">
        <img src="./about_hero.png" alt="Our People" className="hero-img" />
        <div className="hero-overlay">
          <h1>Our Story & Our People.</h1>
          <p>Nurturing a Legacy of Pure, Sustainable Sourcing from Coorg.</p>
        </div>
      </div>

      <div className="about-container">
        <div className="heritage-section">
          <div className="heritage-text">
            <h2>Coorg: Our Heritage</h2>
            <p>
              The unique flora and fauna of Coorg immensely influence the quality of our harvests. The Western Ghats acts as a perfect sanctuary for natural wonders and traditional agriculture.
            </p>
            <p>
              Our mission focuses entirely on sustainable practices that respect the land, the wildlife, and the ancient traditions of the Kodava people.
            </p>
          </div>
          <div className="heritage-image">
            <img src="./about_heritage.png" alt="Coorg Heritage" />
          </div>
        </div>

        <div className="about-categories">
          <div className="about-card">
            <img src="./about_coffee.png" alt="Coffee" />
            <h3>Artisanal Coffee & Spices</h3>
            <p>Picked directly from the verdant estates of Coorg, our coffee is sun-dried and perfectly roasted for rich flavor.</p>
          </div>
          <div className="about-card">
            <img src="./about_honey.png" alt="Honey" />
            <h3>Pure Forest Honey</h3>
            <p>Harvested by local indigenous communities deep within the Western Ghats forests. 100% raw and unfiltered.</p>
          </div>
          <div className="about-card">
            <img src="./about_wine.png" alt="Wine" />
            <h3>Kodava-Inspired Wines</h3>
            <p>Traditional fruit wines made using age-old fermentation techniques and the freshest local produce.</p>
          </div>
        </div>

        <div className="section5">
          <h1 className="why">Why Choose The Kodagu Pantry</h1>
          <div className="subsec5">
            {why.map((i) => {
              return (
                <div className="cards3">
                  <img src={i.image} alt="whyimg" width={80} height={80} style={{ borderRadius: "50%" }} />
                  <p className="whytext">{i.whytext}</p>

                </div>
              );
            })}
          </div>
        </div>

      </div>
      <div className="section6">
        <div className="footer-column">
          <h3>THE KODAGU PANTRY</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Services</p>
          <p>Products</p>
          <p>Blog</p>
          <p>Portfolio</p>
          <p>FAQ</p>
        </div>
        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>
          <p>Shipping Policy</p>
          <p>Return Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>FAQ</p>
        </div>
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p>Email: thekodagpantry@hmail.com</p>
          <p>Phone: +91 7204791362</p>
          <p>Address: 123, Coorg, Karnataka, India</p>
        </div>
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
}

export default About;