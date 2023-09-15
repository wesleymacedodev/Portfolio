import { 
    default_image, 
    file_tools_python_tkinter, 
    gamelauncher_javascript_electron,
    dashboard_website_react,
    wmusic_website_react,
    tela_de_cadastro_login_javascript,
    color_picker_extensao_javascript,
    to_dolist_react,
    pomodoro_react,
    texttoascii_react_python,
    proxy_tools_python,
    jogodaforca_react,
    link_shortener_python
} from "./Images";
import style from "./Projects.module.css";

export const Data = [
    {
        "image":link_shortener_python,
        "style": style, 
        "title": "Link Shortener",
        "description": "Projeto de um encurtador de links utilizando flask, contendo o armazenamento dos dados através de um arquivo json.",
        "tecnology": ["Python", "HTML", "CSS"],
        "date": "12/09/2023",
        "url": "https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Link%20Shortener%20-%20Python%20(Flask)"
    },
    {
        "image":jogodaforca_react,
        "style":style,
        "title":"Jogo Da Forca",
        "description":"Projeto de um jogo da forca utilizando React, com a manipulação de arrays e a presença de styled components para separar os estilos.",
        "tecnology":["React","HTML", "CSS", "JavaScript"],
        "date":"04/09/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Jogo%20Da%20Forca%20-%20React",
    },
    {
        "image":proxy_tools_python,
        "style":style,
        "title":"Proxy Tools",
        "description":"Projeto de uma aplicação verificadora e scraper de proxys (http, socks4, socks5), utilizando interface gráfica (tkinter), requisições (requests) e paralelismo (threading).",
        "tecnology":["Python"],
        "date":"28/08/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Proxy%20Tools%20-%20Python%20(Tkinter)",
      },
    {
        "image":texttoascii_react_python,
        "style":style,
        "title":"Text To Ascii",
        "description":"Projeto de uma página geradora de arte ASCII, utilizando React para a construção do site e Python para a API responsável pela geração e disponibilização das artes em ASCII.",
        "tecnology":["React","HTML", "CSS", "JavaScript", "Python"],
        "date":"21/08/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Text%20To%20Ascii%20-%20React%5CPython",
      },
    {
        "image":pomodoro_react,
        "style":style,
        "title":"Pomodoro",
        "description":"Projeto de um site com a técnica pomodoro utilizando react, composto com os três contadores (pomodoro, pausa curta e pausa longa), além de conter um menu de configurações para alterar o tempo dos cronómetros.",
        "tecnology":["React","HTML", "CSS", "JavaScript"],
        "date":"17/08/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/blob/main/Projetos%20Maiores/Pomodoro%20-%20React/README.MD",
      },
    {
        "image":to_dolist_react,
        "style":style,
        "title":"To-Do List",
        "description":"Projeto de uma to-do list utilizando react, com as funcionalidades de adição de tarefas, remoção, alteração e mudança de estado para sinalizar como tarefa concluída.",
        "tecnology":["React","HTML", "CSS", "JavaScript"],
        "date":"14/08/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/blob/main/Projetos%20Maiores/To-Do%20List%20-%20React/",
      },
    {
        "image":color_picker_extensao_javascript,
        "style":style,
        "title":"Color Picker Extensão",
        "description":"Projeto feito com JavaScript puro (Vanilla JS). Extensão para coletar cores de uma pagina web e de armazenar as últimas cores utilizadas.",
        "tecnology":["HTML", "CSS", "JavaScript"],
        "date":"08/08/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Color%20Picker%20Extens%C3%A3o%20-%20JavaScript",
      },
    {
        "image":tela_de_cadastro_login_javascript,
        "style":style,
        "title":"Tela De Cadastro/Login",
        "description":"Projeto feito com JavaScript puro (Vanilla JS). Tela interativa de cadastro e login, com sistema de validação e verificação, utilizando o localStorage para armazenar e gerenciar os dados obtidos.",
        "tecnology":["HTML", "CSS", "JavaScript"],
        "date":"04/08/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Tela%20De%20Cadastro%5CLogin%20-%20JavaScript",
      },
    {
        "image":file_tools_python_tkinter,
        "style":style,
        "title":"File Tools (Tkinter)",
        "description":"Projeto com interface gráfica feito em Python, com principal objetivo de adicionar algumas funcionalidades como alteração do nome de arquivos de forma massiva e de diversas formas, facilitando a renomeação.",
        "tecnology":["Python"],
        "date":"01/08/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/File%20Tools%20-%20Python%20(Tkinter)",
      },
    {
        "image":default_image,
        "style":style,
        "title":"Filme API (Flask)",
        "description":"Projeto simples feito em Python, pondo em prática a utilização do framework Flask para a confecção de uma API que consiga acessar, adicionar, editar e deletar informações, além de um script simples para a manipulação da API.",
        "tecnology":["Python"],
        "date":"29/07/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Filme%20API%20-%20Python%20(Flask)",
      },
      {
        "image":default_image,
        "style":style,
        "title":"Youtube Downloader",
        "description":"Projeto simples feito em python para o download de videos/musicas do youtube.",
        "tecnology":["Python"],
        "date":"19/07/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Youtube%20Downloader%20-%20Python",
      },
      {
        "image":gamelauncher_javascript_electron,
        "style":style,
        "title":"GameLauncher (Electron)",
        "description":"Projeto feito com a linguagem de programação javascript, utilizando electron para produzir a aplicação desktop, simulando um launcher de jogos com as funcionalidades CRUD.",
        "tecnology":["Html", "Css", "JavaScript"],
        "date":"16/07/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/GameLauncher%20-%20JavaScript%20(Electron)",
      },
      {
        "image":default_image,
        "style":style,
        "title":"WebScrapy MercadoLivre",
        "description":"Projeto idealizado para a coleta de dados de um website, servindo para o fornecimento de informações como o nome, link, preço e desconto dos produtos, sendo exportado em um arquivo (.csv) no final da execução.",
        "tecnology":["Python"],
        "date":"11/07/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/WebScrapy%20MercadoLivre%20-%20Python",
      },
      {
        "image":default_image,
        "style":style,
        "title":"Bloons TD 6 BOT",
        "description":"Projeto simples com deteção de imagens e automação de ações, desenvolvido para funcionar de forma autónoma, consistindo em um bot para jogo bloons td 6.",
        "tecnology":["Python"],
        "date":"09/07/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Bloons%20TD%206%20BOT%20-%20Python",
      },
      {
        "image":dashboard_website_react,
        "style":style,
        "title":"Dashboard Website",
        "description":"Projeto com o intuito de colocar em prática a utilização de componentes e a criação de um site fictício para uma empresa de negócios, além de pôr em prática a utilização do React.",
        "tecnology":["React","HTML", "CSS", "JavaScript"],
        "date":"29/06/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Dashboard%20Website%20-%20React",
      },
      {
        "image":wmusic_website_react,
        "style":style,
        "title":"WMusic Website",
        "description":"Projeto com o intuito de colocar em prática a utilização de componentes e a criação de um site fictício para uma empresa de aplicativo de música, além de pôr em prática a utilização do React.",
        "tecnology":["React","HTML", "CSS", "JavaScript"],
        "date":"23/06/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/WMusic%20Website%20-%20React",
      },
      {
        "image":default_image,
        "style":style,
        "title":"Discord Bot Chat IA",
        "description":"Projeto criado com o intuito de viabilizar a utilização da api da openIA em servidores do discord, tendo a integração do chat bot e geração de imagens através do input do usuário.",
        "tecnology":["Python"],
        "date":"13/06/2023",
        "url":"https://github.com/wesleymacedodev/Projetos/tree/main/Projetos%20Maiores/Discord%20Bot%20Chat%20IA%20-%20Python",
      },
    ]