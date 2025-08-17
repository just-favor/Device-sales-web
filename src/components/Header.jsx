import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CartContext } from "../context/CartContext.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { UserContext } from "../context/Usercontext.jsx";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { username } = useContext(UserContext);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  return (
    <header>
      <div className="head">
        <Link to="/"> <h1>Logo</h1> </Link>

        <nav id="top-nav">
          <div className="a">
            <Link to="/"><p> Home <IoHome /></p> </Link>
          </div> |
          <div className="a">
            <Link to="/about"><p> About <FaCircleInfo /></p></Link>
          </div> |
          <div className="a">
            <Link to="/cart">
              <p className="head-icon">
                Cart {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
                <FaShoppingCart  />
              </p>
            </Link>
          </div>
        </nav>

        <Link to="/login" className="login-btn">
          {username ? username.slice(0, 7) : "Account"} <FaUser />
        </Link>

        <div className="menu-wrapper">
          {!menuOpen ? (
            <button id="menu" onClick={toggleMenu}><RiMenu3Fill className="mobile-dropdown-btn" /> </button>
          ) : (
            <button id="close" onClick={toggleMenu}> <IoMdClose className="mobile-dropdown-btn" /> </button>
          )}
        </div>

        {/* dropdown */}

        {menuOpen && (
          <div className="dropdown active">
            <div className="dropdown-a"> <Link to="/login" className="mobile-login-btn"> {username ? username.slice(0, 7) : "Account"} <FaUser /> </Link>
            </div>
            <div className="dropdown-a"><Link style={{color: 'aqua'}} to="/"> <IoHome /> </Link></div>
            <div className="dropdown-a"><Link style={{color: 'aqua'}} to="/about"> <FaCircleInfo /> </Link></div>
            <div className="dropdown-a"> <Link style={{color: 'aqua'}} to="/cart"> <FaShoppingCart  /> {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>} </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
