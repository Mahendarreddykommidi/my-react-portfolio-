import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Iam frontend developer in california,Usa wth 10 years experience
            worked in multiple companies like amazon facebook etc
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="enter your email here"
            />
          </div>
          <div className="footer-subscribe">subscribe</div>
        </div>
        <hr style={{marginTop:'20px'}}/>
        <div className="footer-bottom">
          <p className="footer-bottom-left">2003 all rights reserved</p>
          <div className="footer-bottom-right">
            <p>Terms of service</p>
            <p>Privacy polcy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
