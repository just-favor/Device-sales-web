import React, { useContext, useState } from 'react';
import gadgets from '../../data/gadgets.js';
import './ProductPage.css';
import { CartContext } from '../../context/CartContext.jsx';
import { FaSearch } from "react-icons/fa";
import NotificationBar from "../NotificationBar.jsx";
import { FaShoppingCart } from "react-icons/fa";

function ProductPage() {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotif, setShowNotif] = useState(false);

  // Filter gadgets by search term in real time
  const filteredGadgets = gadgets.filter(prod =>
    prod.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (prod) => {
    addToCart(prod);

    // Show notification
    setShowNotif(true);

    // Auto-hide after 2.5s
    setTimeout(() => setShowNotif(false), 2500);
  };

  return (
    <section className="products">
      {/* Notification Bar */}
      <NotificationBar message="✅ Item added to cart!" show={showNotif} />

      <div className="searchbar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button> <FaSearch /> </button>
      </div>

      <h2>All Gadgets</h2>

      <div className="product-grid">
        {filteredGadgets.length > 0 ? (
          filteredGadgets.map(prod => (
            <div className="product-card" key={prod.id}>
              <img src={prod.image} alt={prod.title} />
              <h3>{prod.title.slice(0, 18) + "..."}</h3>
              <div className="add-btn-cover">
              <p>${prod.price}</p>
              <button onClick={() => handleAddToCart(prod)}><FaShoppingCart  /></button>
              </div>
            </div>
          ))
        ) : (
          <p>No gadgets found.</p>
        )}
      </div>
    </section>
  );
}

export default ProductPage;
