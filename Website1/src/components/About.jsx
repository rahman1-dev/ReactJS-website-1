import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tag">About Us</p>
          <h1>Fresh food, fast delivery, and a smile with every bite.</h1>
          <p className="about-description">
            We connect hungry people with the best local restaurants, bringing
            delicious meals right to your doorstep in minutes.
          </p>
          <button className="about-btn">Order Now</button>
        </div>
      </section>

      <section className="about-features">
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Enjoy quick service with hot meals delivered in record time.</p>
        </div>
        <div className="feature-card">
          <h3>Best Restaurants</h3>
          <p>Discover top-rated kitchens serving your favorite cuisines.</p>
        </div>
        <div className="feature-card">
          <h3>Easy Ordering</h3>
          <p>Simple, smooth, and convenient from browsing to checkout.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
