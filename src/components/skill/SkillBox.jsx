import React from 'react'

export default function SkillBox(Props) {
  
  
  return (
    <div className={Props.style.skill_box}>
        <div className={Props.style.skill}>
            {Props.children}
        </div>
        <h1 className={Props.style.skill_title}>{Props.name}</h1>
    </div>
  )
}
