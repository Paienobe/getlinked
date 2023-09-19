import "./Partners.css";
import partners from "../../assets/Partner and sponsors section.png";

const Partners = () => {
  return (
    <div className="partners">
      <div>
        <h2>Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>

        <div>
          <img src={partners} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
