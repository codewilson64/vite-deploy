import { useState } from "react";
import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/hamburger_icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useRef } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>GAMESHOP</p>
      </div>

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ps5");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/ps5">
            PS5
          </Link>
          {menu === "ps5" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ps4");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/ps4">
            PS4
          </Link>
          {menu === "ps4" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("xboxone");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/xboxone">
            XBOX ONE
          </Link>
          {menu === "xboxone" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
