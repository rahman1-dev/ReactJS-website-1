import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <h3>© 2026 Rahman Limited</h3>
      <div className="social-det">
        <h3>SOCIAL LINKS</h3>
        <div className="social-icons">
          <FaLinkedin />
          <FaInstagramSquare />
          <FaYoutube />
          <FaFacebookSquare />
        </div>
      </div>
    </div>
  );
};
export default Footer;
