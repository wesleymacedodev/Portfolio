import React from 'react'

export default function ContactElement( {style, children, title, content}) {
  return (
    <div className={style.contact_box}>
     {children}
    <div className={style.contact_info}>
      <h2 className={style.contact_title}>{title}</h2>
      <span className={style.contact_content}>{content}</span>
    </div>
  </div>
  )
}
