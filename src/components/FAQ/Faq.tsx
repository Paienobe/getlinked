import "./Faq.css";
import faqImage from "../../assets/cwok_casual_21 1.png";

const Faq = () => {
  const questions = [
    "Can I work on a project I started before the hackathon?",
    "What happens if I need help during the hackathon?",
    "What happens if I don't have an idea for a project?",
    "Can I join a team or do I have to come with one?",
    "What happens after the hackathon ends",
    "Can I work on a project I started before the hackathon?",
  ];
  return (
    <div className="faq">
      <div>
        <div className="questions_container">
          <h2>
            Frequently Ask <br />
            <span>Question</span>
          </h2>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div>
            {questions.map((question) => {
              return (
                <div key={question} className="question">
                  <p>{question}</p>
                  <p className="plus">+</p>
                </div>
              );
            })}
          </div>
        </div>

        <img src={faqImage} alt="" />
      </div>
    </div>
  );
};

export default Faq;
