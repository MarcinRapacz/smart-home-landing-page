import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import logo from "../images/footerLogo.png"
import "../scss/sidebar.scss"

export default function sidebar({ menuVisible, handleClick }) {
  return (
    <section className={`sidebar ${menuVisible ? "sidebar--show" : ""}`}>
      <div className="sidebar__logoContainer">
        <img src={logo} alt="Logo" className="sidebar__logo" />
        <span class="sidebar__logoText">Afrianska</span>

        <button
          className="sidebar__close"
          onClick={handleClick.bind(null, false)}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </div>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <Link
            to="/blog"
            className="sidebar__link"
            onClick={handleClick.bind(null, false)}
          >
            Blog
          </Link>
        </li>
        <li className="sidebar__item">
          <Link
            to="/contact"
            className="sidebar__link"
            onClick={handleClick.bind(null, false)}
          >
            Contact us
          </Link>
        </li>
      </ul>

      <ul className="sidebar__social">
        <li className="sidebar__socialItem">
          <a href="/#" className="sidebar__socialLink">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="sidebar__socialItem">
          <a href="/#" className="sidebar__socialLink">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="sidebar__socialItem">
          <a href="/#" className="sidebar__socialLink">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="sidebar__socialItem">
          <a href="/#" className="sidebar__socialLink">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
    </section>
  )
}
