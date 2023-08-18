import React, { useEffect } from "react";
import style from "./Projects.module.css";
import { 
default_image, 
file_tools_python_tkinter, 
gamelauncher_javascript_electron,
dashboard_website_react,
wmusic_website_react,
tela_de_cadastro_login_javascript,
color_picker_extensao_javascript,
to_dolist_react,
pomodoro_react
} from "./Images";
import Project from "./Project";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={style.projects} data-aos="zoom-in-right">
      <h1 className={style.title}>Projetos</h1>
      <div className={style.projects_section}>
      <Project
          image={pomodoro_react}
          style={style}
          title={"Pomodoro"}
          description={
            "Projeto de um site com a técnica pomodoro utilizando react, composto com os três contadores (pomodoro, pausa curta e pausa longa), além de conter um menu de configurações para alterar o tempo dos cronómetros."
          }
          tecnology={["React","HTML", "CSS", "JavaScript"]}
          date="17/08/2023"
          url="https://github.com/wesleymacedodev/Projetos/blob/main/Projetos%20Maiores/Pomodoro%20-%20React/README.MD"
        />
      <Project
          image={to_dolist_react}
          style={style}
          title={"To-Do List"}
          description={
            "Projeto de uma to-do list utilizando react, com as funcionalidades de adição de tarefas, remoção, alteração e mudança de estado para sinalizar como tarefa concluída."
          }
          tecnology={["React","HTML", "CSS", "JavaScript"]}
          date="14/08/2023"
          url="https://github.com/wesleymacedodev/Projetos/blob/main/Projetos%20Maiores/To-Do%20List%20-%20React/"
        />
      <Project
          image={color_picker_extensao_javascript}
          style={style}
          title={"Color Picker Extensão"}
          description={
            "Projeto feito com JavaScript puro (Vanilla JS). Extensão para coletar cores de uma pagina web e de armazenar as últimas cores utilizadas."
          }
          tecnology={["HTML", "CSS", "JavaScript"]}
          date="08/08/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Color%20Picker%20Extens%C3%A3o%20-%20JavaScript"
        />
      <Project
          image={tela_de_cadastro_login_javascript}
          style={style}
          title={"Tela De Cadastro/Login"}
          description={
            "Projeto feito com JavaScript puro (Vanilla JS). Tela interativa de cadastro e login, com sistema de validação e verificação, utilizando o localStorage para armazenar e gerenciar os dados obtidos."
          }
          tecnology={["HTML", "CSS", "JavaScript"]}
          date="04/08/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Tela%20De%20Cadastro%5CLogin%20-%20JavaScript"
        />
      <Project
          image={file_tools_python_tkinter}
          style={style}
          title={"File Tools (Tkinter)"}
          description={
            "Projeto com interface gráfica feito em Python, com principal objetivo de adicionar algumas funcionalidades como alteração do nome de arquivos de forma massiva e de diversas formas, facilitando a renomeação."
          }
          tecnology={["Python"]}
          date="01/08/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/File%20Tools%20-%20Python%20(Tkinter)"
        />
      <Project
          image={default_image}
          style={style}
          title={"Filme API (Flask)"}
          description={
            "Projeto simples feito em Python, pondo em prática a utilização do framework Flask para a confecção de uma API que consiga acessar, adicionar, editar e deletar informações, além de um script simples para a manipulação da API."
          }
          tecnology={["Python"]}
          date="29/07/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Filme%20API%20-%20Python%20(Flask)"
        />
        <Project
          image={default_image}
          style={style}
          title={"Youtube Downloader"}
          description={
            "Projeto simples feito em python para o download de videos/musicas do youtube."
          }
          tecnology={["Python"]}
          date="19/07/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Youtube%20Downloader%20-%20Python"
        />
        <Project
          image={gamelauncher_javascript_electron}
          style={style}
          title={"GameLauncher (Electron)"}
          description={
            "Projeto feito com a linguagem de programação javascript, utilizando electron para produzir a aplicação desktop, simulando um launcher de jogos com as funcionalidades CRUD."
          }
          tecnology={["Html", "Css", "JavaScript"]}
          date="16/07/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/GameLauncher%20-%20JavaScript%20(Electron)"
        />
        <Project
          image={default_image}
          style={style}
          title={"WebScrapy MercadoLivre"}
          description={
            "Projeto idealizado para a coleta de dados de um website, servindo para o fornecimento de informações como o nome, link, preço e desconto dos produtos, sendo exportado em um arquivo (.csv) no final da execução."
          }
          tecnology={["Python"]}
          date="11/07/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/WebScrapy%20MercadoLivre%20-%20Python"
        />
        <Project
          image={default_image}
          style={style}
          title={"Bloons TD 6 BOT"}
          description={
            "Projeto simples com deteção de imagens e automação de ações, desenvolvido para funcionar de forma autónoma, consistindo em um bot para jogo bloons td 6."
          }
          tecnology={["Python"]}
          date="09/07/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Bloons%20TD%206%20BOT%20-%20Python"
        />

        <Project
          image={dashboard_website_react}
          style={style}
          title={"Dashboard Website"}
          description={
            "Projeto com o intuito de colocar em prática a utilização de componentes e a criação de um site fictício para uma empresa de negócios, além de pôr em prática a utilização do React."
          }
          tecnology={["React","HTML", "CSS", "JavaScript"]}
          date="29/06/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Dashboard%20Website%20-%20React"
        />
        <Project
          image={wmusic_website_react}
          style={style}
          title={"WMusic Website"}
          description={
            "Projeto com o intuito de colocar em prática a utilização de componentes e a criação de um site fictício para uma empresa de aplicativo de música, além de pôr em prática a utilização do React."
          }
          tecnology={["React","HTML", "CSS", "JavaScript"]}
          date="23/06/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/WMusic%20Website%20-%20React"
        />
        <Project
          image={default_image}
          style={style}
          title={"Discord Bot Chat IA"}
          description={
            "Projeto criado com o intuito de viabilizar a utilização da api da openIA em servidores do discord, tendo a integração do chat bot e geração de imagens através do input do usuário."
          }
          tecnology={["Python"]}
          date="13/06/2023"
          url="https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Discord%20Bot%20Chat%20IA%20-%20Python"
        />
      </div>
    </div>
  );
}
