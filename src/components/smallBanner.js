import React from "react"
import "../scss/smallBanner.scss"

export default function smallBanner({ title, text }) {
  return (
    <section className={`smallBanner`}>
      <h3 className="smallBanner__title">{title}</h3>
      <p className="smallBanner__text">{text}</p>
    </section>
  )
}
