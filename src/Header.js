import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-logo"
      />

      <div className="header_search">
        <input type="text" className="header_searchInput" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">hello user</span>
          <span className="header_optionLineTwo">sign in</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
