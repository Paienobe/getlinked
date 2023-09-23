import React, { useEffect, useState } from "react";
import regimg from "../../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import emojis from "../../assets/Group 3.png";
import RegisterButton from "../../components/RegisterButton/RegisterButton";
import SuccessOverlay from "../../components/SuccessOverlay/SuccessOverlay";
import "./Register.css";
import { GoChevronDown } from "react-icons/go";
import { application, getCategories } from "../../services/api";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCatrgory, setSelectedCategory] = useState(0);
  const [size] = useState(1);

  const payLoad = {
    email,
    phone_number: phone,
    team_name: name,
    group_size: size,
    project_topic: message,
    category: selectedCatrgory,
    privacy_policy_accepted: true,
  };

  const updateState = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
  };

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result);
    });
  }, []);

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
              application(payLoad)
                .then(() => {
                  setShowModal(true);
                })
                .catch(() => alert("failed to submit"));
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
                  required
                  placeholder="Enter the name of your group"
                />
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  value={phone}
                  required
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
                  required
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
                  required
                  onChange={(e) => {
                    updateState(e.target.value, setMessage);
                  }}
                  placeholder="What is your group project topic"
                />
              </div>
              <div className="form_dropdowns">
                <div>
                  <label htmlFor="">Category</label>
                  <div
                    className="form_select category_holder"
                    onClick={() => setShowCategories(!showCategories)}
                  >
                    {!selectedCatrgory ? (
                      <>
                        <p>Select your category</p>
                        <GoChevronDown size={18} />
                      </>
                    ) : (
                      <p>{categories[selectedCatrgory - 1].name}</p>
                    )}

                    {showCategories && (
                      <div className="category_list">
                        {categories.map((item) => {
                          return (
                            <p
                              key={item.id}
                              onClick={() => setSelectedCategory(item.id)}
                            >
                              {item.name}
                            </p>
                          );
                        })}
                      </div>
                    )}
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
              <input type="checkbox" name="agreement" id="" />
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
