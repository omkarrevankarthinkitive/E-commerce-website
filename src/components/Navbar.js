import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";

//importing react router dom
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="parentNav">
        <li>Blue collection</li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <Link to="/">login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>

        <li>
          <BsSearch className="iconSearch" />
          <input type="text" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
