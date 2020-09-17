import React from "react"
import image from "../images/contactImage.png"
import emailIcon from "../icons/email.svg"
import worldIcon from "../icons/world.svg"
import phoneIcon from "../icons/phone.svg"
import "../scss/contactData.scss"

export default function contactData() {
  return (
    <section className={"contactData"}>
      <img src={image} alt="Contact Us" className="contactData__image" />
      <div className="contactData__container">
        <h5 className="contactData__title">ADDRESS</h5>
        <p className="contactData__text">
          Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.
        </p>
      </div>
      <div className="contactData__container">
        <h5 className="contactData__title">PHONE</h5>
        <ul className="contactData__list">
          <li className="contactData__item">
            <img
              src={phoneIcon}
              alt="phone icon"
              className="contactData__icon"
            />
            <span className="contactData__text">+62-812-7313-4321</span>
          </li>
          <li className="contactData__item">
            <img
              src={phoneIcon}
              alt="phone icon"
              className="contactData__icon"
            />
            <span className="contactData__text">+62-817-000-1234</span>
          </li>
        </ul>
      </div>
      <div className="contactData__container">
        <h5 className="contactData__title">ONLINE SERVICE</h5>
        <ul className="contactData__list">
          <li className="contactData__item">
            <img
              src={worldIcon}
              alt="email icon"
              className="contactData__icon"
            />
            <span className="contactData__text">www.afrianska.com</span>
          </li>
          <li className="contactData__item">
            <img
              src={emailIcon}
              alt="world icon"
              className="contactData__icon"
            />
            <span className="contactData__text">hello.afrian@gmail.com</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
