import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallBanner from "../components/smallBanner"
import ContactData from "../components/contactData"
import ContactForm from "../components/contactForm"
import Map from "../components/map"
import "../scss/contactPage.scss"

const ContactPage = () => {
  const title = "Contact Us"
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

  return (
    <Layout staticMode={true}>
      <SEO title="Contact us" />
      <SmallBanner title={title} text={text} />
      <div className="contactPage__content">
        <ContactData />
        <ContactForm />
        <Map />
      </div>
    </Layout>
  )
}

export default ContactPage
