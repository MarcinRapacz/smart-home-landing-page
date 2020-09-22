import React from "react"
import Magnifier from "../icons/magnifier.svg"
import "../scss/articleFilter.scss"

export default function articleFilter({ handleFilterText }) {
  const handleChange = e => {
    handleFilterText(e.target.value)
  }

  return (
    <section className="articleFilter">
      <div className="articleFilter__inputGroup">
        <img src={Magnifier} alt="Magnifier" className="articleFilter__icon" />
        <input
          className="articleFilter__input"
          type="text"
          placeholder="Search Article"
          onChange={handleChange}
        />
      </div>
    </section>
  )
}
