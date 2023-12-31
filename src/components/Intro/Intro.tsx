import "./Intro.css";
import vector from "../../assets/Vector 4.png";
import dude from "../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import metrix from "../../assets/metrix 1.png";
import purple from "../../assets/Purple-Lens-Flare-PNG.png";
import globe from "../../assets/globe.png";
import bulb from "../../assets/Creative 1.png";
import explode from "../../assets/1f4a5.png";
import chain from "../../assets/chain-9365116-7621444.png";
import RegisterButton from "../RegisterButton/RegisterButton";
import Star from "../Star/Star";
import PinkBlur from "../PinkBlur/PinkBlur";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="intro">
      <div>
        <p className="ignite">
          <i>Igniting a Revolution in HR Innovation</i>
          <img src={vector} alt="" />
        </p>
        <div className="intro_main">
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="intro_info"
          >
            <div>
              <h1>
                getlinked Tech <br /> Hackathon <span>1.0</span>
                <img src={chain} alt="" />
                <img src={bulb} alt="" />
                <img src={explode} alt="" />
              </h1>
              <p>
                Participate in getlinked tech Hackathon 2023 stand <br />a
                chance to win a Big prize
              </p>
              <RegisterButton />
            </div>

            <p className="timer">
              00<small>H</small> 00<small>M</small> 00<small>S</small>
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="intro_image_holder"
          >
            <img src={globe} alt="" />
            <img src={dude} alt="" />
            <img src={purple} alt="" />
            <img src={metrix} alt="" />
          </motion.div>
        </div>
      </div>

      <Star inset="20% 4% 0 12%" />

      <Star isPink={true} inset="10% 0 0 25%" />

      <Star inset="26% 0 0 12%" />

      <Star inset="34% 0 0 48%" />
      <PinkBlur inset="10% 0 0 0" />
    </section>
  );
};

export default Intro;
