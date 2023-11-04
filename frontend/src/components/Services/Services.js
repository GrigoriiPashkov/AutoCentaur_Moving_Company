import "../../styles/services.css";

import { services } from "../../helpers/servicesList";
import Service from "../service/Service";
const Services = () => {
  return (
    <section id="services" className="section">
      <div className="content-title">
        <h2 className="content-heading">
          Diverse Moving Services Tailored to Your Needs
        </h2>
        <div className="content-subheading">
          From Residential Relocations to Specialized Moves, We've Got You
          Covered
        </div>
      </div>
      <div className="image-container">
        {services.map((service, index) => {
          return (
            <Service
              dataTitle={service.dataTitle}
              img={service.img}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Services;
