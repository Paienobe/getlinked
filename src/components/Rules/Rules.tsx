import "./Rules.css";
import rulesImage from "../../assets/rules.png";
import Star from "../Star/Star";
import PinkBlur from "../PinkBlur/PinkBlur";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Rules = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
    }
  }, [isInView]);
  return (
    <section className="rules">
      <motion.div
        ref={ref}
        initial={{ x: 250 }}
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <div className="rules_text">
          <h2>
            Rules and <br />
            <span>Guidelines</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <img src={rulesImage} alt="" />
      </motion.div>

      <Star inset="20% 4% 0 12%" />

      <Star isPink={true} inset="10% 0 0 25%" />

      <Star inset="26% 0 0 12%" />

      <Star inset="34% 48% 0 0 " />
      <PinkBlur inset="0 0 0 0" />
      <PinkBlur inset="2% 0 0 55%" />
    </section>
  );
};

export default Rules;
