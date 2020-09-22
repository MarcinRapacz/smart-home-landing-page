import React from "react"
import rightArrow from "../icons/rightArrow.svg"
import whatWeDo_1 from "../images/whatWeDo_1.png"
import whatWeDo_2 from "../images/whatWeDo_2.png"
import whatWeDo_3 from "../images/whatWeDo_3.png"
import "../scss/whatWeDo.scss"

export default function whatWeDo() {
  return (
    <section className={`whatWeDo`} id="whatWeDo">
      <h4 className={`whatWeDo__header`}>
        What we do to help our client grow in digital era,
      </h4>
      <div className="whatWeDo__gridContainer">
        <div className="whatWeDo__card1 whatWeDo__card">
          <img
            className={`whatWeDo__image`}
            src={whatWeDo_1}
            alt="What we do 1"
          />
          <h5 className="whatWeDo__title">
            Bring Technology To Your Comfrotable Home
          </h5>
          <p className="whatWeDo__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/#" className="whatWeDo__link">
            Learn more
            <img
              className={`whatWeDo__icon`}
              src={rightArrow}
              alt="right arrow"
            />
          </a>
        </div>
        <div className="whatWeDo__card2 whatWeDo__card">
          <img
            className={`whatWeDo__image`}
            src={whatWeDo_2}
            alt="What we do 2"
          />
          <h5 className="whatWeDo__title">
            Make Your business To Be Better Famous In Internet
          </h5>
          <p className="whatWeDo__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/#" className="whatWeDo__link">
            Learn more
            <img
              className={`whatWeDo__icon`}
              src={rightArrow}
              alt="right arrow"
            />
          </a>
        </div>
        <div className="whatWeDo__card3 whatWeDo__card">
          <img
            className={`whatWeDo__image`}
            src={whatWeDo_3}
            alt="What we do 3"
          />
          <h5 className="whatWeDo__title">
            Build Your Digital Product That Suitable For Your Need
          </h5>
          <p className="whatWeDo__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/#" className="whatWeDo__link">
            Learn more
            <img
              className={`whatWeDo__icon`}
              src={rightArrow}
              alt="right arrow"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
