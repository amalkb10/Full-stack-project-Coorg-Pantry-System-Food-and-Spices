import React from 'react';
import './Blog.css';

function Blog() {
  const latestPost = {
    title: "The Heart of Coorg: Stories from our Coffee Harvest",
    excerpt: "Join us as we explore the rich traditions of the annual coffee harvest in the Western Ghats. From selecting the ripest red cherries to the meticulous sun-drying process, discover what makes our artisanal roasts truly special.",
    image: "./about_hero.png",
    date: "October 12, 202X",
    category: "Farming & Process"
  };

  const blogPosts = [
    {
      id: 1,
      title: "Understanding High Altitude Arabica",
      excerpt: "Why the elevation of Coorg makes for the smoothest, most complex coffee flavor profiles available in India.",
      image: "./blog_harvest.png",
      date: "September 28, 202X",
      category: "Coffee Education"
    },
    {
      id: 2,
      title: "The Art of Kodava Fruit Wines",
      excerpt: "A deep dive into the traditional fermentation techniques passed down through generations in Kodava culture.",
      image: "./service_tasting.png",
      date: "September 15, 202X",
      category: "Culture & Recipes"
    },
    {
      id: 3,
      title: "Wild Honey: A Gift from the Western Ghats",
      excerpt: "Learn how local indigenous communities sustainably harvest 100% pure raw honey without harming the forest ecosystem.",
      image: "./about_honey.png",
      date: "August 30, 202X",
      category: "Sustainability"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>The Pantry Journal</h1>
        <p>Stories, culture, and guides from the heart of the Western Ghats.</p>
      </div>

      <div className="blog-container">
        {/* Featured Post */}
        <div className="featured-post">
          <div className="featured-image-wrapper">
            <img src={latestPost.image} alt={latestPost.title} className="featured-image" />
          </div>
          <div className="featured-content">
            <span className="post-category">{latestPost.category}</span>
            <h2>{latestPost.title}</h2>
            <p className="post-date">{latestPost.date}</p>
            <p className="post-excerpt">{latestPost.excerpt}</p>
            <button className="read-more-btn">Read Article</button>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="recent-posts-section">
          <h3>Recent Articles</h3>
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-image-wrapper">
                  <img src={post.image} alt={post.title} className="post-image" />
                  <span className="post-badge">{post.category}</span>
                </div>
                <div className="post-card-content">
                  <p className="post-date">{post.date}</p>
                  <h4>{post.title}</h4>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <a href="#" className="post-link">Read more <span>→</span></a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blog;