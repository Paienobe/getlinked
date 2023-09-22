import "./Rules.css";
import rulesImage from "../../assets/rules.png";
import Star from "../Star/Star";
import PinkBlur from "../PinkBlur/PinkBlur";

const Rules = () => {
  return (
    <section className="rules">
      <div>
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
      </div>

      <Star inset="20rem 4rem 0 12rem" />
      <Star isPink={true} inset="10rem 0 0 25rem" />
      <Star inset="26rem 0 0 12rem" />
      <Star inset="34rem 0 0 48rem" />
      <PinkBlur inset="0 0 0 0" />
      <PinkBlur inset="1rem 0 0 55rem" />
    </section>
  );
};

export default Rules;
