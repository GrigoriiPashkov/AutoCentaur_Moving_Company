import { NavLink } from "react-router-dom";
import "../../styles/services.css";

const Service = ({ title, dataTitle, img, index }) => {
  return (
    <NavLink to={`/service/${index}`} className="NavLink">
      <div className="imagelink" data-title={dataTitle}>
        <img src={img} alt={title} />
      </div>
    </NavLink>
  );
};

export default Service;
