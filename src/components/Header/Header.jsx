import React from "react";
import "./Header.css";
import logo from "../../assets/header-img.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const style = {
    textDecoration: "underline",
    cursor: "pointer",
  };
  return (
    <>
      <header className="header">
        <div className="logo">
          <img className="logoImg" src={logo} alt="logo" />
        </div>
        <nav className="nav">
          <a href="#download" className="download">
            Download
          </a>
          <a href="#learn" className="learn">
            Learn{" "}
            <span className="icon">
              <MdOutlineKeyboardArrowDown className="icon" />
            </span>
          </a>
          <a href="#contribute">Contribute</a>
        </nav>
      </header>
      <div className="line">
        <p className="lineTxt">
          FxSound is now open-source and we're looking for{" "}
          <span style={style}>contributors</span>
        </p>
      </div>
    </>
  );
};

export default Header;
