import RegisterButton from "../RegisterButton/RegisterButton";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <section>
          <p className="logo">
            get<span>inked</span>
          </p>
        </section>

        <section className="link_holder">
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQS</li>
            <li>Contact</li>
          </ul>

          <RegisterButton />
        </section>
      </nav>
    </header>
  );
};

export default Header;
