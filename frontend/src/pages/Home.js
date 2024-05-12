import React, { useState } from "react";
import "../styles/main.css";
import bannerImage from "../img/homescreen41.jpg";
import packing from "../img/handle-with-care_4667083 (1).png";
import map from "../img/map_731584.png";
import price from "../img/best-price_4309304.png";
import quick from "../img/stopwatch_7102665.png";
import Services from "../components/Services/Services";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Image preloader to detect when the main banner image is fully loaded
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="content">
      {/* Loader displayed until the image is fully loaded */}
      {!imageLoaded && <Loader />}

      {/* Main content with the banner image */}
      <div
        id="home"
        className="banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <img
          src={bannerImage}
          alt="banner preloader"
          style={{ display: "none" }}
          onLoad={handleImageLoad}
        />
        {imageLoaded && (
          <div className="title-wrapper">
            <h1 className="heading">
              Welcome To <em>AutoCentaur</em>
            </h1>
            <div className="subheading">Canadian Moving Company</div>
            <div className="head-buttons">
              <a href="#contacts">Get A Quote!</a>
            </div>
          </div>
        )}
      </div>

      {/* The remaining content is only shown after the image is fully loaded */}
      {imageLoaded && (
        <>
          <section id="about" className="section">
            <div className="content-container">
              <div className="content-title">
                <h2 className="content-heading">
                  Experience Seamless Relocation with AutoCentaur
                </h2>
                <div className="content-subheading">
                  Where Precision, Speed, and Affordability Meet
                </div>
              </div>
              <div className="content-row">
                <div className="row-25">
                  <img src={packing} alt="Professional Packing" />
                  <h3>Professional Packing</h3>
                  <p>
                    AutoCentaur ensures that your belongings are packed with
                    utmost care. Our expert packers use the best materials and
                    techniques to protect your items, making sure they arrive
                    safely at their destination.
                  </p>
                </div>
                <div className="row-25">
                  <img src={map} alt="Serving All of Toronto" />
                  <h3>Serving All of Toronto</h3>
                  <p>
                    No matter where you're located in Toronto, AutoCentaur is at
                    your service. From the downtown core to the outer boroughs,
                    we're here to make your move smooth and hassle-free.
                  </p>
                </div>
                <div className="row-25">
                  <img src={price} alt="Competitive Pricing" />
                  <h3>Competitive Pricing</h3>
                  <p>
                    Quality doesn't always have to come at a high price.
                    AutoCentaur offers top-notch moving services at prices that
                    fit your budget, making sure you get value for your money.
                  </p>
                </div>
                <div className="row-25">
                  <img src={quick} alt="Rapid Services" />
                  <h3>Rapid Services</h3>
                  <p>
                    At AutoCentaur, speed meets efficiency. We understand the
                    importance of time, which is why our trained professionals
                    are committed to providing rapid yet precise relocation
                    services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="call-to-action">
            <div className="action-container">
              <div className="action-row">
                <div className="action-text">
                  <h2>
                    Secure your smooth move with AutoCentaur today. Get your
                    quote now!
                  </h2>
                </div>
                <div className="action-button">
                  <a href="#contacts">Get A Quote!</a>
                </div>
              </div>
            </div>
          </section>

          <Services />

          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
