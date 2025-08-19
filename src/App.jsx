import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import Shop from './components/Shop.jsx';
import CartProvider from "./context/CartContext";
import Cart from './components/pages/Cart.jsx';
import ProductPage from './components/pages/ProductPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/Footer.jsx';
import Checkout from './components/pages/Checkout.jsx'
import About from './components/pages/About.jsx';
import Login from "./components/pages/Login.jsx"
import UserProvider from './context/Usercontext';

function App() {
  return (
    <UserProvider>
    <CartProvider>
    <Router>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Showcase />
              <Shop limit={4} />
            </>
          }
          />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/shop' element={<ProductPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
          </CartProvider>
          </UserProvider>
  );
}

export default App;
