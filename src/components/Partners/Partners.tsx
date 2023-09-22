import "./Partners.css";
import partners from "../../assets/Partner and sponsors section.png";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ scale: 1 });
    }
  }, [isInView]);
  return (
    <div className="partners">
      <motion.div
        ref={ref}
        initial={{ scale: 0.5 }}
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <h2>Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>

        <div>
          <img src={partners} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Partners;
