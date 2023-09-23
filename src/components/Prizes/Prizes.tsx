import "./Prizes.css";
import prizes from "../../assets/Rewards.png";
import trophy from "../../assets/trophy.png";
import overlay from "../../assets/prizes-bg.png";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Prizes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ y: 0 });
    }
  }, [isInView]);
  return (
    <div className="prizes">
      <img className="prizes_overlay" src={overlay} alt="" />
      <div className="prizes_main">
        <motion.img
          ref={ref}
          src={trophy}
          alt=""
          initial={{ y: 250 }}
          animate={mainControls}
          transition={{ duration: 1 }}
        />
        <motion.div
          ref={ref}
          initial={{ y: -250 }}
          animate={mainControls}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Prizes;
