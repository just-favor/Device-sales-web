import React from "react";
import "./Showcase.css";
import image  from '../assets/Apple iPad Pro 2024 Black PNG Background Removed.png'
import { Link } from 'react-router-dom';

function Showcase() {
  return (
    <section className="showbox">
      <div className="left-showbox">
        <div className="text">
          <p>TABLETS</p>
          <h2>
            Apple <br /> iPad Air
          </h2>
          <p>
            iPad is a line of tablet computers designed and
            marketed by Apple Inc., which run the iOS and iPadOS mobile
            operating systems.
          </p>
          <Link to="/products" className="purchase-btn"> Purchase </Link>
        </div>
        <img src={image} alt="iPad Air" />
      </div>

      <div className="right-showbox">
        <div className="text">
          <p>SMART WATCHES</p>
          <h2>
            Apple <br /> Watch
          </h2>
          <p>
            Apple Watch is a line of smartwatches produced by Apple Inc. It
            incorporates fitness tracking and health-oriented capabilities.
          </p>
          <Link to="/products" className="purchase-btn"> Purchase </Link>
        </div>
        <img src="https://i.pinimg.com/1200x/dc/6f/36/dc6f36c462e0560263a6429d3fbfb492.jpg" alt="Apple Watch" />
      </div>
    </section>
  );
}

export default Showcase;
