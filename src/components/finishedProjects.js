import React from "react"
import "../scss/finishedProjects.scss"

export default function finishedProjects() {
  return (
    <section className={`finishedProjects`}>
      <div className="finishedProjects__textContainer">
        <h4 className="finishedProjects__title">Our Finished Project</h4>
        <p className="finishedProjects__descriptions">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="finishedProjects__imagesContainer">
        <div className="finishedProjects__big">
          <h5 className="finishedProjects__imageTitle">
            Smart Home Installation
          </h5>
          <p className="finishedProjects__imageDescription">
            In Muarakana Housing Estate
          </p>
        </div>
        <div className="finishedProjects__small--1">
          <h5 className="finishedProjects__imageTitle">Sparklite App</h5>
          <p className="finishedProjects__imageDescription">Marketplace</p>
        </div>
        <div className="finishedProjects__small--2">
          <h5 className="finishedProjects__imageTitle">Car-Rapetition App</h5>
          <p className="finishedProjects__imageDescription">Board</p>
        </div>
      </div>
    </section>
  )
}
