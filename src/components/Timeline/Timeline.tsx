import Star from "../Star/Star";
import "./Timeline.css";
import { timeline } from "./timelineData";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
    }
  }, [isInView]);
  return (
    <div className="timeline">
      <div>
        <div className="timeline_top">
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate <br />
            using for the upcoming event.
          </p>
        </div>

        <motion.div
          className="timeline_holder"
          ref={ref}
          initial={{ x: 250 }}
          animate={mainControls}
          transition={{ duration: 1 }}
        >
          {timeline.map((item, index) => {
            return (
              <div className="single_timeline" key={item.title}>
                <div>
                  <p className="timeline_title">{item.title}</p>
                  <p className="timeline_description">{item.description}</p>
                </div>

                <div>
                  <div className="vertical_line"></div>
                  <div className="sphere">{index + 1}</div>
                </div>

                <div>
                  <p className="timeline_date">{item.date}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <Star inset="40rem 4rem 0 12rem" />
      <Star isPink={true} inset="10rem 0 64rem 25rem" />
      <Star inset="26rem 8rem 0 12rem" />
      <Star inset="14rem 0 0 38rem" />
      <Star inset="14rem 2rem 0 38rem" />
      <Star inset="4rem 20rem 0 38rem" />
      <Star inset="18rem 0 0 18rem" />
    </div>
  );
};

export default Timeline;
