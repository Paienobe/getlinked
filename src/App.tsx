import "./App.css";
import BigIdea from "./components/BigIdea/BigIdea";
import Faq from "./components/FAQ/Faq";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Judging from "./components/Judging/Judging";
import Partners from "./components/Partners/Partners";
import Prizes from "./components/Prizes/Prizes";
import Rules from "./components/Rules/Rules";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <BigIdea />
      <Rules />
      <Judging />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
    </>
  );
}

export default App;
