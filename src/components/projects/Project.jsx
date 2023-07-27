import React from 'react'

export default function Project( {style, image, title, description, tecnology, date, url}) {
    const tecnologys = (value) => {
     switch (value.toLowerCase()) {
        case "python":
            return {backgroundColor: "var(--python)"}
        case "javascript":
            return {backgroundColor: "var(--javascript)"}
        case "html":
            return {backgroundColor: "var(--html)"}
        case "css": 
            return {backgroundColor: "var(--css)"}
        case "react":
            return {backgroundColor: "var(--react)"}
        case "linux":
            return {backgroundColor: "var(--linux)"}
        default:
            return {color: "gray"}
     }
    }

    return (
            <div className={style.project}>  
                        <a
            target="_blank"
            rel='noopener noreferrer'
            href={url}
            className={style.link}
            >
                <img src={image} alt="" className={style.project_image} />
                <div className={style.project_content}>
                    <h2 className={style.project_title}>{title}</h2>
                    <p className={style.project_description}>{description}</p>
                    <div className={style.project_languages}>
                        {
                        tecnology ?
                        tecnology.map(
                            (element, index) => 
                            ( <span className={`${style.project_language}`} style={tecnologys(element)} key={index}>{element}</span> ))
                        : []
                        }
                    </div>
                    <span className={style.project_data}>{date}</span>
                </div>
                </a>
            </div> 

  )
}
