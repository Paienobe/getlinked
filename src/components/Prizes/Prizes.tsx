import "./Prizes.css";
import prizes from "../../assets/Rewards.png";
import trophy from "../../assets/trophy.png";
import overlay from "../../assets/prizes-bg.png";

const Prizes = () => {
  return (
    <div className="prizes">
      <img className="prizes_overlay" src={overlay} alt="" />
      <div>
        <img src={trophy} alt="" />
        <div>
          <div>
            <h2>
              Prizes and <br />
              <span>Rewards</span>
            </h2>
            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>

          <img src={prizes} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
