import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="headerTitle">
        <div className="headerName">
          <h1>
            Just <span>Name</span> it,We <span>have</span> it
          </h1>
          <h3>Leading face of the E-commerce</h3>
        </div>
        <div className="headerImage">
          <img src="https://pngroyale.com/wp-content/uploads/2022/03/Electronic-PNG-Pic.png" />
        </div>
      </div>
    </div>
  );
}

export default Header;
