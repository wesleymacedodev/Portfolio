import style from './Header.module.css'
import React from 'react'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'

export default function Header() {
  return (
    <div className={style.header}>
        <section>
            <h1 className={style.title}>Wesley Macedo</h1>
            <p className={style.description}>Apenas um desenvolvedor fascinado na área de programação, normalmente utilizo meu tempo livre para pesquisar sobre as novidades tecnológicas</p>
                <div className={style.links}>
                    <a 
                    className={`${style.link} ${style.github}`}
                    target="_blank"
                    rel='noopener noreferrer'
                    href="https://github.com/wesleymacedodev"
                    ><FaGithub/></a>
                    <a className={`${style.link} ${style.linkedin}`}
                    target="_blank"
                    rel='noopener noreferrer'
                    href="https://www.linkedin.com/in/wesleymacedodev/"
                    ><FaLinkedin/></a>
                    <a className={`${style.link} ${style.email}`}
                    href="mailto:wesleymacedodev@gmail.com"
                    ><FaRegEnvelope/></a>
                </div>
        </section>
    </div>
  )
}
