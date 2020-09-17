import React from "react"
import { Link } from "gatsby"
import logo from "../images/navbarLogo.png"
import hamburger from "../icons/hamburger.svg"
import "../scss/navbar.scss"

export default function navbar({ handleClick, staticMode }) {
  return (
    <nav className={`navbar ${staticMode ? "navbar--static" : ""}`}>
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar__image" />
        </Link>
      </div>
      <button className="navbar__button" onClick={handleClick.bind(null, true)}>
        <img className="navbar__icon" src={hamburger} alt="Show menu" />
      </button>
    </nav>
  )
}
