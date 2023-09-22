import star from "../../assets/star.png";
import starpink from "../../assets/star pu.png";
import "./star.css";

type Props = { isPink?: boolean; inset: string };

const Star = ({ isPink, inset }: Props) => {
  return (
    <img
      className="star"
      src={isPink ? starpink : star}
      style={{ position: "absolute", inset }}
      alt=""
    />
  );
};

export default Star;
