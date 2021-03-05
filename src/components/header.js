import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import video from "../images/video/Caballo 2.mp4"
import horse from "../images/Caballo 1.png"

import Nav from "./Nav"

const Header = () => {
  return (
    <>
      <header>
        <link rel="stylesheet" href="https://use.typekit.net/dgg7wjb.css" />
      </header>

      <Nav />

      <div className="">
        <div>
          <img src={horse} alt="horse" className="sm:w-full" />
        </div>

        <div className="">
          <div className="sm:flex hidden">
            <video muted src={video} autoPlay loop></video>
          </div>

          <div className="">
            <span className=" ">
              data <br />
              <span className=" ">driven</span>
              <p className="">digital marketing experience</p>
            </span>
          </div>
          <div className=" ">
            <Link to="/" className="">
              Let's work together
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
