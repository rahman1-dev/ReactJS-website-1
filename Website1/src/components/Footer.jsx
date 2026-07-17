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
      {/* <img
        height="200px"
        width="200px"
        src="https://assets.bonappetit.com/photos/63a390eda38261d1c3bdc555/1:1/w_2400,h_2400,c_limit/best-food-writing-2022-lede.jpg"
        alt=""
      /> */}
    </div>
  );
};
export default Footer;
