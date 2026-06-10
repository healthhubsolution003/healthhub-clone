
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const logo = "https://res.cloudinary.com/dukoegkdj/image/upload/f_auto,q_auto/healthhub/logo_fvktbs";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="HealthHub Solution" className="logo-img" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="navbar-links">
          <li><Link to="/" className="active-link">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/wholesale">Wholesale</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* BUTTON */}
        <Link to="/contact" className="navbar-btn">Get a Quote</Link>

        {/* HAMBURGER */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/wholesale" onClick={() => setMenuOpen(false)}>Wholesale</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/contact" className="mobile-btn" onClick={() => setMenuOpen(false)}>Get a Quote</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
