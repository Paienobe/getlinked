import "./SuccessOverlay.css";
import confirmation from "../../assets/Confirmation.png";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SuccessOverlay = ({ setShowModal }: Props) => {
  return (
    <section className="success_ovelay">
      <img src={confirmation} alt="" onClick={() => setShowModal(false)} />
    </section>
  );
};

export default SuccessOverlay;
