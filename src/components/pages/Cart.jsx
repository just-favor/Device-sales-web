import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart empty">
        <h2>
          Cart <FaShoppingCart />
        </h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>
        Cart <FaShoppingCart />
      </h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width="50" />
          <p className="quantity">
            {item.name} x{item.quantity}
          </p>
          <p>{item.title}</p>
          <p>Price: ${item.price * item.quantity}</p>
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />
      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      <div className="cart-actions">
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
        <Link to="/checkout">
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
