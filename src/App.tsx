import "./App.css";
import BigIdea from "./components/BigIdea/BigIdea";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Judging from "./components/Judging/Judging";
import Rules from "./components/Rules/Rules";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <BigIdea />
      <Rules />
      <Judging />
    </>
  );
}

export default App;
