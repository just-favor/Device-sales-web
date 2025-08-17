// src/pages/About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>(Store Name)</strong> — your one-stop shop for
          quality gadgets at unbeatable prices. We believe shopping should be
          simple, affordable, and fun!
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide top-notch products that make your life
          easier and more enjoyable. We carefully select our gadgets to ensure
          they meet high quality and performance standards.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Affordable and competitive pricing</li>
          <li>✅ High-quality, reliable products</li>
          <li>✅ Excellent customer service</li>
          <li>✅ Fast and secure delivery</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Feel free to reach out to us at:
          <br />
          📧 <a href="mailto:support@yourstore.com">support@yourstore.com</a>
        </p>
      </div>
    </section>
  );
}

export default About;
