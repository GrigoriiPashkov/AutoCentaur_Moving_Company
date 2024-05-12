import React from "react";
import "../styles/loader.css";

import truck from "../img/1.png";
import wheel1 from "../img/22.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="truck-body">
        <img className="truck-img" src={truck} alt="truck" />
        <div className="wheels">
          <img className="wheel-img wheel-img1" src={wheel1} alt="wheel" />
          <img className="wheel-img wheel-img2" src={wheel1} alt="wheel" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
