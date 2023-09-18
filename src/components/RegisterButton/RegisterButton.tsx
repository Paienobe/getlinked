import "./RegisterButton.css";

type Props = { text?: string };

const RegisterButton = ({ text }: Props) => {
  return <button className="register_btn">{text || "Register"}</button>;
};

export default RegisterButton;
