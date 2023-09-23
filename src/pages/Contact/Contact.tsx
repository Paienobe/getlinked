import { BsInstagram } from "react-icons/bs";
import "./Contact.css";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import RegisterButton from "../../components/RegisterButton/RegisterButton";
import { useState } from "react";
import { contact } from "../../services/api";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const updateState = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
  };

  const contactPayload = {
    email,
    phone_number: "0903322445533",
    first_name: name,
    message,
  };

  return (
    <div className="contact_page">
      <div>
        <div className="contact_left">
          <h2>Get in touch</h2>
          <p>
            Contact <br />
            Information
          </p>
          <p>
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </p>

          <div>
            <p>
              <span>Share on</span>
            </p>
            <div className="socials">
              <BsInstagram size={24} />
              <RiTwitterXLine size={24} />
              <FaFacebookF size={24} />
              <BiLogoLinkedin size={24} />
            </div>
          </div>
        </div>

        <div className="contact_right">
          <p>Questions or need assistance?</p>
          <p>Let us know about it!</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              contact(contactPayload);
            }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => {
                updateState(e.target.value, setName);
              }}
              placeholder="First Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                updateState(e.target.value, setEmail);
              }}
              placeholder="Mail"
              required
            />
            <textarea
              placeholder="Message"
              required
              value={message}
              onChange={(e) => {
                updateState(e.target.value, setMessage);
              }}
              rows={8}
            ></textarea>
            <RegisterButton text="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
