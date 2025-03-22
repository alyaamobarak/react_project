import React from "react";
import "./Home.css";
import { HiArrowRight } from "react-icons/hi";

const Panner = () => {
  return (
    <div className="membership-banner">
      <span className="offer-text"><strong>Become a Member & get 10% off</strong></span>
      <div className="button-container">
        <a href="#" className="subscribe-btn">
          Sign up for free <HiArrowRight className="arrow-icon" />
        </a>
      </div>
    </div>
  );
};

export default Panner;
