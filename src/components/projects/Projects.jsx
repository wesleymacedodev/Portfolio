import React, { useEffect, useState } from "react";
import style from "./Projects.module.css";
import { Data } from "./Data"
import Project from "./Project";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [filter, setFilter] = useState(null);
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.projects} data-aos="zoom-in-right">
      <h1 className={style.title}>Projetos</h1>
      <div className={style.filterBar}>
        <button className={`${style.filter} ${style.python}`} onClick={() => setFilter("Python")}>Python</button>
        <button className={`${style.filter} ${style.javascript}`} onClick={() => setFilter("JavaScript")}>JavaScript</button>
        <button className={`${style.filter} ${style.react}`} onClick={() => setFilter("React")}>React</button>
        <button className={`${style.filter} ${style.reset}`} onClick={() => setFilter(null)}>Resetar</button>
      </div>
      <div className={style.projects_section}>
      {
      filter !== null ? 
        Data.map(value => value.tecnology.includes(filter) ? 
        <Project 
          image={value.image} 
          style={value.style} 
          title={value.title} 
          description={value.description} 
          tecnology={value.tecnology}
          date={value.date}
          url={value.url}
        />
        :
        null
      )
    : Data.map(value => 
    <Project 
      image={value.image} 
      style={value.style} 
      title={value.title} 
      description={value.description} 
      tecnology={value.tecnology}
      date={value.date}
      url={value.url}
    />
  )
    }
      </div>
    </div>
  );
}
