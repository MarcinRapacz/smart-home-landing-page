import React from "react"
import "../scss/contactForm.scss"

export default function contactForm() {
  return (
    <form className="contactForm">
      <h5 className="contactForm__title">SEND US MESSAGE</h5>
      <div className="contactForm__inputGroup">
        <label className="contactForm__label" htmlFor="fullName">
          Full Name
        </label>
        <input type="text" className="contactForm__input" id="fullName" />
      </div>
      <div className="contactForm__inputGroup">
        <label className="contactForm__label" htmlFor="email">
          Email
        </label>
        <input type="email" className="contactForm__input" id="email" />
      </div>
      <div className="contactForm__inputGroup">
        <label className="contactForm__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contactForm__input contactForm__input--textarea"
          id="message"
        ></textarea>
      </div>
      <button className="contactForm__button" type="submit">
        SUBMIT
      </button>
    </form>
  )
}
