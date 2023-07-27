import React from 'react'
import style from './Skill.module.css'
import SkillBox from './SkillBox'
import { FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaLinux } from 'react-icons/fa'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Skill() {

  useEffect(() => {
    Aos.init({ duration: 2000})
  }, [])

  return (
    <div className={style.skills} data-aos="zoom-in-right">
      <h1 className={style.title}>Habilidades</h1>
      <div className={style.skill_section}>
          <SkillBox style={style} name={"Python"}>
            <FaPython className={`${style.python} ${style.skill_icon}`}/>
          </SkillBox>
          
          <SkillBox style={style} name={"Html"}>
            <FaHtml5 className={`${style.html} ${style.skill_icon}`}/>
          </SkillBox>
          
          <SkillBox style={style} name={"Css"}>
            <FaCss3 className={`${style.css} ${style.skill_icon}`}/>
          </SkillBox>
          
          <SkillBox style={style} name={"JavaScript"}>
            <FaJs className={`${style.javascript} ${style.skill_icon}`}/>
          </SkillBox>
          
          <SkillBox style={style} name={"React"}>
            <FaReact className={`${style.react} ${style.skill_icon}`}/>
          </SkillBox>
          
          <SkillBox style={style} name={"Linux"}>
            <FaLinux className={`${style.linux} ${style.skill_icon}`}/>
          </SkillBox>
      </div>
    </div>
  )
}
