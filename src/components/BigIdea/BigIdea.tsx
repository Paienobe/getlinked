import "./BigIdea.css";
import bigIdea from "../../assets/The big idea.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const BigIdea = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
    }
  }, [isInView]);
  return (
    <section className="big_idea">
      <div>
        <motion.img
          ref={ref}
          initial={{ x: -250 }}
          animate={mainControls}
          transition={{ duration: 1 }}
          src={bigIdea}
          alt=""
        />
        <motion.div
          ref={ref}
          initial={{ x: 250 }}
          animate={mainControls}
          transition={{ duration: 1 }}
          className="idea_text"
        >
          <h2>
            Introduction to getlinked <br />
            <span>tech Hackathon 1.0</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BigIdea;
