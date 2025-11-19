import React from "react";
import "../App.css";
import "../Css/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footercentered-text">
        Feel Free To <span className="introcolor">Contact Me</span>
      </h3>
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/SauravV8202032?t=ypzH24MhtcUQvhQnUwX79A&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/saurav_8925?igsh=NGR5YzczZWxpMmNz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/sauravverma810"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/saurav-verma-809406329/?trk=public_profile-settings_edit-profile-content&originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="footerlast">
        <div className="designby">Designed by Saurav Verma </div>
        <div className="Copyright">Copyright © 2025</div>
      </div>
    </footer>
  );
}

export default Footer;
