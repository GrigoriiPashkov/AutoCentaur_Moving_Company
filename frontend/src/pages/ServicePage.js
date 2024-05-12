import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../helpers/servicesList";
import ScrollToTop from "../utils/ScrollToTop";
import Footer from "../components/footer/Footer";
import "../styles/service.css";
import Loader from "../components/loader";

const Service = () => {
  const { id } = useParams();
  const service = services[id];
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <ScrollToTop />

      <img
        src={service.img_front}
        alt={service.title}
        onLoad={() => setImageLoaded(true)}
        style={{ display: "none" }}
      />
      {imageLoaded ? (
        <div>
          <div
            className="banner"
            style={{ backgroundImage: `url(${service.img_front})` }}
          >
            <div className="service-content-left service-content-border">
              <div>
                <h1>{service.h1_content1}</h1>
                <p>{service.p_content1}</p>
              </div>
            </div>
            <div className="service-content-right service-content-border">
              <div>
                <h1>{service.h1_content2}</h1>
                <p>{service.p_content2}</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Service;
