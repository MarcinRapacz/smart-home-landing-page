import React from "react"
import { Link } from "gatsby"
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
        <Link to="/#finishedProjects" className="banner__link">
          See Our Project
        </Link>
      </div>
    </div>
  )
}
