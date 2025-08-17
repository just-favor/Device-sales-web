import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Link } from 'react-router-dom';

const slides = [
  {
    heading: "Get The Best Devices",
    sub: "At Affordable Prices...",
    desc: "We offer the best services across the nation. Our products are affordable and durable.",
    image: "https://i.pinimg.com/1200x/3c/00/cc/3c00cc9bb722d583e70cbff7c915a375.jpg",
  },
  {
    heading: "Experience Premium Sound",
    sub: "With High-Quality Headphones",
    desc: "Crystal clear audio with noise cancellation and long battery life.",
    image: "https://i.pinimg.com/1200x/98/ec/ea/98ecea912462e04a34cb72518b39b34c.jpg",
  },
  {
    heading: "Stay Connected",
    sub: "With Smart Watches",
    desc: "Track your fitness, receive messages, and look stylish at the same time.",
    image: "https://i.pinimg.com/736x/9d/2a/d4/9d2ad4acca499cf2e319b9ded5e495e4.jpg",
  },
  {
    heading: "Capture Every Moment",
    sub: "With Our Latest Smartphones",
    desc: "High-resolution cameras, sleek designs, and powerful performance.",
    image: "https://i.pinimg.com/1200x/5c/a5/98/5ca598c91ca1cd206aca3bb2284e7e12.jpg",
  }
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === currentIndex ? "active" : ""}`}
          key={index}
        >
          <div className="hero-text">
            <h2>
              {slide.heading} <br />
              <span className="h-span">{slide.sub}</span>
            </h2>
            <p>{slide.desc}</p>
            <Link to="/products" > <button className="hero-btn">Explore</button> </Link>
          </div>

          <div className="hero-img">
            <img src={slide.image} alt="slide" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;

