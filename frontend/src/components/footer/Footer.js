import "../../styles/footer-style.css";
import ContactUs from "./ContactUs";
const Footer = () => {
  return (
    <div>
      <div className="foot-container">
        <div className="left-content">
          <h2 className="h2-footer">Moving with AutoCentaur</h2>
          <p className="p-footer">
            AutoCentaur Moving takes immense pride in the exceptional quality of
            service and the sustained track record of customer satisfaction
            we've extended to the residents and businesses of North York, as
            well as the Greater Toronto Area. Our team and foundational ethos
            echo the principles inherent to a premier moving company, molding
            the identity and stature of AutoCentaur Moving to what it stands for
            today.
          </p>
          <p className="p-footer">
            Regardless of your relocation needs, our team of professionals at
            AutoCentaur Moving handles it with expertise!
          </p>
          <div className="features">
            <div className="text-border">Residential Moving</div>
            <div className="text-border">Commercial Relocation</div>

            <div className="text-border">Packing & Unpacking</div>

            <div className="text-border">Long Distance Moves</div>
          </div>
        </div>
        <div className="right-content">
          <h2 className="h2-footer">We're Here For Your Relocation Needs</h2>
          <p className="p-footer">
            AutoCentaur Moving is the comprehensive solution for moving in North
            York, dedicated to assisting individuals, families, and businesses
            throughout North York and the Greater Toronto Area. Reach out to us
            today for unparalleled moving services in:
          </p>
          <div className="ul-container">
            <ul>
              <li>Toronto</li>
              <li>North York</li>
              <li>Vaughan</li>
              <li>Richmond Hill</li>
              <li>Ajax</li>
              <li>Milton</li>
            </ul>

            <ul>
              <li>Barrie</li>
              <li>Mississauga</li>
              <li>Brampton</li>
              <li>Whitby</li>
              <li>Newmarket</li>
              <li>Aurora</li>
            </ul>

            <ul>
              <li>Markham</li>
              <li>Oakville</li>
              <li>Oshawa</li>
              <li>Etobicoke</li>
              <li>Guelph</li>
              <li>Burlington</li>
            </ul>
          </div>
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default Footer;
