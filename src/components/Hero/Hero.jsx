import React from "react";
import "./Hero.css";
import Header from "../Header/Header.jsx";
import heroImg from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="mainTitle">Get better sound</h1>
          <p className="subTitle">
            Free open-source software to boost sound quality, volume, and bass.
            Including an equalizer, effects, and presets for customized audio.
          </p>
          <button className="hero-btn">Download For Windows</button>
        </div>
        <div className="hero-img">
          <img className="heroImage" src={heroImg} alt="HERO" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
