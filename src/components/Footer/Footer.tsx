import "./Footer.css";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="first_item">
          <div>
            <p className="logo">
              get<span>linked</span>
            </p>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>

          <p>
            Terms of Use <span>|</span> Privacy Policy
          </p>
        </div>

        <div>
          <p>
            <span>Useful Links</span>
          </p>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div className="socials">
            <span>Follow us</span>
            <div>
              <BsInstagram size={24} />
              <RiTwitterXLine size={24} />
              <FaFacebookF size={24} />
              <BiLogoLinkedin size={24} />
            </div>
          </div>
        </div>

        <div>
          <p>
            <span>Contact Us</span>
          </p>
          <div className="contact_p">
            <img src={phone} alt="" /> <p>+234 6707653444</p>
          </div>
          <div className="contact_p">
            <img src={location} alt="" />{" "}
            <p>
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>

      <p className="last_text">All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
};

export default Footer;
