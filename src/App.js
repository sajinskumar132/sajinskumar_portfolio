import "./App.css";
import Header from "./custom_components/header/Header";
import Hero from "./hero/Hero";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import ConnectWithMe from "./connect_with_me/ConnectWithMe";

function App() {
  return (
    <div className="app_main_container">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <ConnectWithMe />
    </div>
  );
}

export default App;
