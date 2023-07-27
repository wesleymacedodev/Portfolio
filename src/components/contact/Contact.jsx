import React, { useEffect } from "react";
import style from "./Contact.module.css";
import { FaRegEnvelope, FaMapMarkedAlt, FaLinkedin } from "react-icons/fa";
import ContactElement from "./ContactElement";
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Contact() {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <div className={style.contact} data-aos="zoom-in-right">
      <h2 className={style.title}>Contato</h2>
      <div className={style.contact_contents}>
        <ContactElement 
        style={style}
        title="Email"
        content="wesleymacedodev@gmail.com">
          <FaRegEnvelope className={style.contact_icon} />
        </ContactElement>
        <ContactElement 
        style={style}
        title="Localização"
        content="Aracaju, SE. Brazil">
          <FaMapMarkedAlt className={style.contact_icon} />
        </ContactElement>
        {/* <ContactElement 
        style={style}
        title="Numero"
        content="">
          <FaPhone className={style.contact_icon} />
        </ContactElement> */}
        <ContactElement 
        style={style}
        title="Linkedin"
        content="wesleymacedodev">
          <FaLinkedin className={style.contact_icon} />
        </ContactElement>
      </div>
    </div>
  );
}
