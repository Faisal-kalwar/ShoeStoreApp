import React from "react";
import { Link } from "react-router-dom";
import Menu from '../svg/bars-solid.svg'
import Close from '../svg/circle-xmark-solid.svg'
import Cart from '../svg/cart-shopping-solid.svg'
import '../Css/Header.css'
function Header() {
  return (
    <header>
      <div className="menu">
        <img src={Menu}   alt= ''  width="20" />
      </div>
      <div className="Logo">
        <h1><Link to="/">Nike</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Product">Product</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li className="close">
            <img src={Close} alt=" " width="20" />
           </li>
        </ul>
        <div className="nav-cart">
          <span>0</span>
          <Link to="/cart">
            <img src={Cart} alt=" " width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
