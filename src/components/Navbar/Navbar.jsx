import "./Navbar.css";
// import { CiHeart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {  useSelector } from 'react-redux';

function Navbar() {
  const NavbarActive = ({ isActive }) => (isActive ? "active" : "");
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleAuth = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      navigate("/");

    }
  };
  const wishlistCount = useSelector((state) => state.favourts?.items.length || 0);
  return (
<header className="header">
    <div className="logo">
    <NavLink to="/" className={({ isActive }) => NavbarActive({ isActive })}><img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwa9b27032/images/adidas_logo.svg" alt="Logo" /></NavLink>
    </div>
    <ul className="nav-links">
    <li><NavLink to="/"className={({ isActive }) => (isActive ? "active" : "")}>MEN</NavLink></li>
    <li><NavLink to="/about" className={NavbarActive}>WOMEN</NavLink></li>
    <li><NavLink to="/products" className={NavbarActive}>KIDS</NavLink></li>
    <li><NavLink to="/contact" className={NavbarActive}>NEW</NavLink></li>
    <li className="d-flex align-item-center"> <NavLink to="/favourte" className={NavbarActive}>  SPORTS</NavLink> </li>
      <li href="#" className="lifestyle">LIFESTYLE</li>
      <li href="#" className="sale">SALE</li>
    </ul>

  <div className="sericon">
  <div className="search-container">
      <input type="text" placeholder="Search" className="search-input" />
      <button className="search-icon">
        <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwc932187d/images/search.svg' />
      </button>
    </div>

    <div className="icons">
      <div className="icon-wrapper">
      <NavLink to="/login" onClick={handleAuth} className={NavbarActive}>
      <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw5e6daa4a/images/profile.svg' className="user-icon" />
      </NavLink>
      </div>

      <div className="icon-badge">
        <NavLink to="/favourte" className={NavbarActive}>
        <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwff734d40/images/wishlist.svg'/>
        </NavLink> 
        <span className="badge">{wishlistCount}</span>
      </div>

      <div className="icon-badge">
        <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw2556a9b0/images/bag%20empty.svg" />
        <span className="badge">0</span>
      </div>
    </div>
  </div>
  </header>
);
};

export default Navbar;
