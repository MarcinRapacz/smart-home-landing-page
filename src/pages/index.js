import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import WhatWeDo from "../components/whatWeDo"
import FinishedProjects from "../components/finishedProjects"
import OurClients from "../components/ourClients"

const IndexPage = () => (
  <Layout blueVarsion={true}>
    <SEO title="Home" />
    <Banner />
    <WhatWeDo />
    <FinishedProjects />
    <OurClients />
  </Layout>
)

export default IndexPage
