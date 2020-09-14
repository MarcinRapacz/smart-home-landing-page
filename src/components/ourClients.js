import React from "react"
import "../scss/ourClients.scss"

export default function OurClients() {
  return (
    <section className={`ourClients`}>
      <div className="ourClients__headerContainer">
        <h4 className="ourClients__header">Our Beloved Client</h4>
        <p className="ourClients__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div className="ourClients__table">
        <div className="ourClients__tableItem">Logo Client 1</div>
        <div className="ourClients__tableItem">Logo Client 2</div>
        <div className="ourClients__tableItem">Logo Client 3</div>
        <div className="ourClients__tableItem">Logo Client 4</div>
        <div className="ourClients__tableItem">Logo Client 5</div>
        <div className="ourClients__tableItem">Logo Client 6</div>
        <div className="ourClients__tableItem">Logo Client 7</div>
        <div className="ourClients__tableItem ourClients__tableItem--more">
          More Client
        </div>
      </div>
    </section>
  )
}
