import { Link, useLocation } from "react-router-dom";
import RegisterButton from "../RegisterButton/RegisterButton";
import "./Header.css";

const Header = () => {
  const location = useLocation().pathname;
  return (
    <header>
      <nav>
        <section>
          <Link to="/">
            <p className="logo">
              get<span>inked</span>
            </p>
          </Link>
        </section>

        <section className="link_holder">
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQS</li>
            <li className={location == "/contact" ? "contact_link" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/register">
            <RegisterButton />
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
