import "./Judging.css";
import judging from "../../assets/judging.png";
import RegisterButton from "../RegisterButton/RegisterButton";

const Judging = () => {
  const judgementCriteria = [
    {
      title: "Innovation and Creativity:",
      description:
        "Evaluate the uniqueness and creativity of thesolution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      title: "Functionality:",
      description:
        "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
    },
    {
      title: "Impact and Relevance:",
      description:
        "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
    },
    {
      title: "Technical Complexity:",
      description:
        "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
    },

    {
      title: "Innovation and Creativity:",
      description:
        "Adherence to Hackathon Rules: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
    },
  ];

  const criteriaList = judgementCriteria.map((item) => {
    return (
      <li key={item.title}>
        <span>{item.title} </span>
        {item.description}
      </li>
    );
  });
  return (
    <section className="judging">
      <div>
        <img src={judging} alt="" />
        <div className="judging_text">
          <h2>
            Judging Criteria <br />
            <span>Key attributes</span>
          </h2>

          <ul>{criteriaList}</ul>

          <RegisterButton text="Read More" />
        </div>
      </div>
    </section>
  );
};

export default Judging;
