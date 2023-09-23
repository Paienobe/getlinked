import RegisterButton from "../RegisterButton/RegisterButton";
import "./Privacy.css";
import watermark from "../../assets/lock-tp.png";
import lock from "../../assets/lock.png";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Privacy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
    }
  }, [isInView]);
  return (
    <div className="privacy">
      <motion.div
        ref={ref}
        initial={{ x: 250 }}
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <div className="privacy_text">
          <h2>
            Privacy Policy and <br />
            <span>Terms</span>
          </h2>
          <p>Last updated on September 12, 2023</p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div className="privacy_card">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <ul>
              <p>Licensing Policy</p>
              <p>Here are terms of our Standard License:</p>

              <li>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>

            <RegisterButton text="Read More" />
          </div>
        </div>

        <div className="privacy_image_parent">
          <img src={watermark} alt="" />
          <img src={lock} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
