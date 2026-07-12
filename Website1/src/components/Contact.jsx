import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-content">
          <p className="contact-tag">Contact Us</p>
          <h1>We’re here to make your food journey easier.</h1>
          <p className="contact-description">
            Have a question, suggestion, or need help with an order? Reach out
            to our friendly team anytime.
          </p>
        </div>
      </section>

      <section className="contact-card">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📍 123 Food Street, City Center</p>
          <p>📞 +1 234 567 890</p>
          <p>✉️ support@foodhub.com</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
