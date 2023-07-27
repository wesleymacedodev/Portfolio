import Header from "./components/header/Header";
import Aboutme from "./components/aboutme/Aboutme";
import Skill from "./components/skill/Skill";
import style from './App.module.css'
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";


function App() {

  return (
    <div className={`App ${style.App}`}>
      <Header/>
      <Aboutme/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
