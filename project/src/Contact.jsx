import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("===== New Message Received =====");
    console.log("Name:", data.fullName);
    console.log("Email:", data.email);
    console.log("Subject:", data.subject);
    console.log("Message:", data.message);
  };

  return (
    <div className="contact-page" style={{ backgroundImage: 'url("./leaf_watermark.png")' }}>
      <div className="contact-container">

        {/* Left Side: Form */}
        <div className="contact-form-section">
          <h1 className="contact-heading">GET IN TOUCH.</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Have a question about our products, an order, or just want to say hello? Fill out the form below, and we'll get back to you shortly.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="fullName" placeholder="Your Full Name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Your Email Address" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select name="subject" required>
                <option value="">Select Subject</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Order Status">Order Status</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Write your message here..." rows="5" required></textarea>
            </div>

            <button type="submit" className="btn-send">SEND MESSAGE</button>
          </form>
        </div>

        <div className="contact-details-section">
          <h2>OUR DETAILS</h2>

          <div className="detail-item">
            <div className="detail-icon">✉️</div>
            <div>
              <strong>Email</strong>
              <p>info@kodagupantry.co.in</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">📞</div>
            <div>
              <strong>Phone</strong>
              <p>+91 98765 43210<br />(Mon-Sat, 9 AM - 6 PM IST)</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">📍</div>
            <div>
              <strong>Address</strong>
              <p>The Kodagu Pantry, Main Road, Madikeri,<br />Kodagu, Karnataka - 571201</p>
            </div>
          </div>

          <div className="contact-image-card">
            <img src="./madikeri_map.png" alt="Map of Madikeri" className="map-image" />
          </div>

          <div className="contact-image-card team-card">
            <img src="./support_team.png" alt="Support Team" className="team-image" />
            <div className="team-text-overlay">Meet Our Support Team</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;