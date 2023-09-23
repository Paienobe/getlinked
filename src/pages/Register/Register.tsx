import { useState } from "react";
import regimg from "../../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import emojis from "../../assets/Group 3.png";
import RegisterButton from "../../components/RegisterButton/RegisterButton";
import SuccessOverlay from "../../components/SuccessOverlay/SuccessOverlay";
import "./Register.css";
import { GoChevronDown } from "react-icons/go";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const updateState = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
  };
  return (
    <div className="register">
      <div>
        <img src={regimg} alt="" />
        <div>
          <h2>Register</h2>
          <p className="character_text">
            <span>Be part of this movement!</span> <img src={emojis} alt="" />
          </p>
          <form
            className="register_form"
            onSubmit={(e) => {
              e.preventDefault();

              setShowModal(true);
            }}
          >
            <p className="form_header">CREATE YOUR ACCOUNT</p>
            <div className="form_grid">
              <div>
                <label htmlFor="">Team's Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    updateState(e.target.value, setName);
                  }}
                  placeholder="Enter the name of your group"
                />
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    updateState(e.target.value, setPhone);
                  }}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    updateState(e.target.value, setEmail);
                  }}
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="">Project Topic</label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => {
                    updateState(e.target.value, setMessage);
                  }}
                  placeholder="What is your group project topic"
                />
              </div>
              <div className="form_dropdowns">
                <div>
                  <label htmlFor="">Category</label>
                  <div className="form_select">
                    <p>Select your category</p>
                    <GoChevronDown size={18} />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Group Size</label>
                  <div className="form_select">
                    <p>Select</p>
                    <GoChevronDown size={18} />
                  </div>
                </div>
              </div>
            </div>

            <p>
              <span>
                <i>Please review your registration details before submitting</i>
              </span>
            </p>
            <div className="check_area">
              <input type="checkbox" name="" id="" />
              <p>
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <RegisterButton />
          </form>
        </div>
        {showModal && <SuccessOverlay setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Register;
