import React from "react"
import { Link } from "gatsby"
import Logo from "../images/footerLogo.png"
import "../scss/footer.scss"

export default function footer({ blueVarsion }) {
  const year = new Date().getFullYear()

  return (
    <footer className={`footer ${blueVarsion ? "footer--blue" : ""}`}>
      <div className="footer__row footer__row--round">
        <div className="footer__textContent">
          <h4 className="footer__title">Intersted to work with our team?</h4>
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <Link className="footer__button" to={"/contact"}>
          Let’s Talk
        </Link>
      </div>

      <div className="footer__row">
        <div className="footer__contact">
          <div className="footer__logoContainer">
            <img className="footer__logoImage" src={Logo} alt="Logo" />
            <span className="footer__logoText">Afrianska</span>
          </div>
          <ul className="footer__list">
            <li className="footer__item">
              <span className="footer__char">A.</span> Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </li>
            <li className="footer__item">
              <span className="footer__char">T.</span> +62-812-7313-4321
            </li>
            <li className="footer__item">
              <span className="footer__char">E</span> hello.afrian@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer__aboutUs">
          <h6 className="footer__subTitle">About US</h6>
          <ul className="footer__list">
            <li className="footer__item footer__item--smallBreak">
              <a href="/#" className="footer__link">
                About
              </a>
            </li>
            <li className="footer__item footer__item--smallBreak">
              <Link to="/#whatWeDo" className="footer__link">
                What We Do
              </Link>
            </li>
            <li className="footer__item footer__item--smallBreak">
              <Link to="/#finishedProjects" className="footer__link">
                Project
              </Link>
            </li>
            <li className="footer__item footer__item--smallBreak">
              <a href="/#" className="footer__link">
                How It Work With Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__followUs">
          <h6 className="footer__subTitle">Follow US</h6>
          <ul className="footer__list">
            <li className="footer__item footer__item--smallBreak">
              <a href="https://www.instagram.com/" className="footer__link">
                Instagram
              </a>
            </li>
            <li className="footer__item footer__item--smallBreak">
              <a
                href="https://www.facebook.com/marcin.rapacz.5"
                className="footer__link"
              >
                Facebook
              </a>
            </li>
            <li className="footer__item footer__item--smallBreak">
              <a
                href="https://www.linkedin.com/in/marcin-rapacz"
                className="footer__link"
              >
                LinkedIn
              </a>
            </li>
            <li className="footer__item footer__item--smallBreak">
              <a href="https://www.youtube.com/" className="footer__link">
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__row footer__row--date">
        {year} © Afrianska. All rights reserved.
      </div>
    </footer>
  )
}
