import React from "react"
import logo from "../images/navbarLogo.png"
import hamburger from "../icons/hamburger.svg"
import "../scss/navbar.scss"

export default function navbar({ handleClick }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" className="navbar__image" />
      </div>
      <button className="navbar__button" onClick={handleClick.bind(null, true)}>
        <img className="navbar__icon" src={hamburger} alt="Show menu" />
      </button>
    </nav>
  )
}
