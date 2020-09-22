/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../components/sidebar"
import Backdrop from "../components/backdrop"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

import "../scss/layout.scss"

const Layout = ({ children, staticMode, blueVarsion }) => {
  const [showMenu, setShowMenu] = React.useState(false)

  const handleShowMenu = state => setShowMenu(state)

  return (
    <div className={`${blueVarsion ? "bg-blue" : ""}`}>
      <Navbar staticMode={staticMode} handleClick={handleShowMenu} />
      <Backdrop menuVisible={showMenu} handleClick={handleShowMenu} />
      <Sidebar menuVisible={showMenu} handleClick={handleShowMenu} />
      <main>{children}</main>
      <Footer blueVarsion={blueVarsion} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
