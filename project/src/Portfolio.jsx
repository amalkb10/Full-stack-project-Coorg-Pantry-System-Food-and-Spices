import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "./about_heritage.png",
      title: "The Estate at Dawn",
      category: "Landscape"
    },
    {
      id: 2,
      image: "./about_hero.png",
      title: "Our Dedicated Farmers",
      category: "People"
    },
    {
      id: 3,
      image: "./blog_harvest.png",
      title: "Hand-picking Cherries",
      category: "Harvest"
    },
    {
      id: 4,
      image: "./about_coffee.png",
      title: "Raw & Roasted",
      category: "Process"
    },
    {
      id: 5,
      image: "./about_honey.png",
      title: "Wild Honey Extraction",
      category: "Harvest"
    },
    {
      id: 6,
      image: "./about_wine.png",
      title: "Traditional Fermentation",
      category: "Process"
    },
    {
      id: 7,
      image: "./service_tasting.png",
      title: "Curated Tastings",
      category: "Experience"
    },
    {
      id: 8,
      image: "./service_gifting.png",
      title: "Artisanal Hampers",
      category: "Packaging"
    }
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>Our Visual Journey</h1>
        <p>A glimpse into the life, craft, and breathtaking landscapes behind The Kodagu Pantry.</p>
      </div>

      <div className="portfolio-gallery">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-overlay">
              <span className="portfolio-category">{item.category}</span>
              <h3 className="portfolio-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;