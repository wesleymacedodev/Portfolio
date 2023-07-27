import React, { useEffect } from 'react'
import style from './Aboutme.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Aboutme() {
  
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  
  const dataNascimento = new Date(2005,5,29)
  const idade = Math.floor((new Date() - dataNascimento) / (365.25 * 24 * 60 * 60 * 1000));

  return (
    <div className={style.aboutme} data-aos="zoom-in-up">
        <h1 className={style.title}>Sobre mim</h1>
        <p className={style.description}>Prazer, chamo-me Wesley Macedo e tenho {idade} anos. Atualmente, estou cursando a graduação de Análise e Desenvolvimento de Sistemas e o Técnico de Informática no IFS. Busco me tornar um desenvolvedor Full Stack, pois curto bastante a área de tecnologia e sinto facilidade em aprender novas linguagens e tecnologias, o que acaba me impulsionando bastante nos meus estudos.<br/><br/>Obtive meu primeiro contato com a programação aos meus 13/14 anos de idade, através das linguagens de programação Java e Lua. Isso despertou uma enorme curiosidade na época e acabou me incentivando a descobrir mais sobre essa área. Entretanto, foi através do Python que o desejo de seguir o caminho do desenvolvimento ficou ainda mais forte. Meus primeiros projetos foram voltados para bots e simples automatizações, que foram de extrema importância para o meu desenvolvimento.</p>

    </div>
  )
}
