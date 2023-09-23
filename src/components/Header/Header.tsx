import { Link, useLocation } from "react-router-dom";
import RegisterButton from "../RegisterButton/RegisterButton";
import "./Header.css";
import menu from "../../assets/menu.png";
import closer from "../../assets/Group 1.png";
import { useState } from "react";

const Header = () => {
  const location = useLocation().pathname;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav>
        <section>
          <Link to="/">
            <p className="logo">
              get<span>linked</span>
            </p>
          </Link>
        </section>

        <section className={`link_holder ${showMenu ? "show" : "hide"}`}>
          <img
            className="closer"
            src={closer}
            onClick={() => setShowMenu(false)}
            alt=""
          />
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQS</li>
            <li className={location == "/contact" ? "contact_link" : ""}>
              <Link to="/contact" onClick={() => setShowMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/register" onClick={() => setShowMenu(false)}>
            <RegisterButton />
          </Link>
        </section>

        <img src={menu} onClick={() => setShowMenu(true)} alt="" />
      </nav>
    </header>
  );
};

export default Header;
