import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully! ✅");
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        {/* Order Summary */}
        <div className="order-summary">
          <h3>Your Order</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <p className="p">
                {item.title} <span className="numb"> x{item.quantity} </span>
              </p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <hr style={{border: '2px solid black'}}/>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>

        {/* Shipping Form */}
        <form className="checkout-form" onSubmit={handleOrder}>
          <h3 className="h3" >Shipping Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
      <hr style={{margin: '10px'}}/>
      <Link to='/shop' > <button className="back-to-store">Back to Store</button></Link>
    </div>
  );
}

export default Checkout;
