import flare from "../../assets/Purple-Lens-Flare-PNG.png";

type Props = { inset: string };

const PinkBlur = ({ inset }: Props) => {
  return (
    <img
      src={flare}
      alt=""
      style={{
        position: "absolute",
        inset,
        zIndex: "-1",
        width: "50%",
        opacity: "0.75",
      }}
    />
  );
};

export default PinkBlur;
