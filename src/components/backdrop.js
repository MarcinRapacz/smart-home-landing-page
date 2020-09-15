import React from "react"
import "../scss/backdrop.scss"

export default function backdrop({ menuVisible, handleClick }) {
  return (
    <section
      className={`backdrop ${menuVisible ? "backdrop--show" : ""}`}
      onClick={handleClick.bind(null, false)}
    ></section>
  )
}
