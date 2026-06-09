import { Link } from 'react-router-dom';
import './Footer.css';

const logo = "https://drive.google.com/uc?export=view&id=1hG10d_2r2zQOSWLZqwM2BaCo9sBApaiX";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">

            <div className="footer-brand">
             
        <img src={logo} alt="HealthHub Solution" className="footer-logo-img" />
        
  <p className="footer-desc">
                A trusted partner for hospitals, clinics,
                pharmacies and retail customers across India.
              </p>
              <div className="footer-contact-info">
                <div className="footer-contact-row">
                  <span className="contact-icon green">&#128205;</span>
                  <span>Shop No. 03, Shiv Ranjani Complex, Sidsar Road, Bhavnagar - 364002</span>
                </div>
                <div className="footer-contact-row">
                  <span className="contact-icon green">&#128222;</span>
                  <span>
                    <a href="tel:7567945642">7567945642</a>
                    <span className="dot"> · </span>
                    <a href="tel:8347480205">8347480205</a>
                  </span>
                </div>
                <div className="footer-contact-row">
                  <span className="contact-icon green">&#9993;</span>
                  <a href="mailto:Healthhubsolution03@gmail.com">Healthhubsolution03@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/wholesale">Wholesale</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Categories</h4>
              <ul className="footer-links">
                <li><Link to="/products/orthopedic">Orthopedic Products</Link></li>
                <li><Link to="/products/surgical">Surgical &amp; Medical Disposables</Link></li>
                <li><Link to="/products/hygiene">Hygiene Care</Link></li>
                <li><Link to="/products/equipment">Medical Equipment</Link></li>
                <li><Link to="/products/physiotherapy">Physiotherapy Products</Link></li>
                <li><Link to="/products/baby">Baby Care</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Get in touch</h4>
              <p className="footer-touch-desc">
                Wholesale, hospital supply or retail — we respond within one business day.
              </p>
              <Link to="/contact" className="footer-inquiry-btn">Send Inquiry</Link>
            </div>

          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2026 HealthHub Solution. All rights reserved.</span>
            <span className="footer-proprietor">Proprietor: Mitesh Makavana</span>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Footer;