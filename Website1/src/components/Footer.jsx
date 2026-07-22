import {
  FaLinkedin,
  FaInstagramSquare,
  FaYoutube,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-container">
        <div className="footer-column footer-brand">
          <h2 className="footer-logo">Rahman</h2>
          <p className="footer-desc">
            Fresh local restaurants delivered fast. Discover top-rated eateries
            near you.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/grocery">Grocery</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>support@rahman.co</p>
          <p>+1 (555) 123-4567</p>
          <p>Hyderabad, India</p>
        </div>

        <div className="footer-column footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <FaInstagramSquare />
            </a>
            <a href="#" aria-label="YouTube" className="social-link">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Facebook" className="social-link">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Rahman Limited</span>
        <span className="footer-credit">Built with ❤️</span>
      </div>
    </footer>
  );
};

export default Footer;
