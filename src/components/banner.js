import React from "react"
import "../scss/banner.scss"

export default function Banner() {
  return (
    <div className={`banner`}>
      <div className="banner__container">
        <h1 className={`banner__title`}>New Automation Tool for Your Home</h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin
          odio tellus elit.
        </p>
        <a href="/#" className="banner__link">
          See Our Project
        </a>
      </div>
    </div>
  )
}
