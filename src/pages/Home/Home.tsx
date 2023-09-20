import BigIdea from "../../components/BigIdea/BigIdea";
import Faq from "../../components/FAQ/Faq";
import Intro from "../../components/Intro/Intro";
import Judging from "../../components/Judging/Judging";
import Partners from "../../components/Partners/Partners";
import Privacy from "../../components/Privacy/Privacy";
import Prizes from "../../components/Prizes/Prizes";
import Rules from "../../components/Rules/Rules";
import Timeline from "../../components/Timeline/Timeline";

const Home = () => {
  return (
    <div>
      <Intro />
      <BigIdea />
      <Rules />
      <Judging />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
    </div>
  );
};

export default Home;
