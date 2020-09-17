import React from "react"
import mapp from "../images/map.jpg"
import "../scss/map.scss"

export default function map() {
  return (
    <section className="map">
      <img className="map__image" src={mapp} alt="Map" />
    </section>
  )
}
