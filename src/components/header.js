import React from "react"
import { Link } from "gatsby"
import VideoBg from "reactjs-videobg"
import video from "../images/video/Caballo 2.mp4"

import PropTypes from "prop-types"

import horse from "../images/Caballo 1.png"

import Nav from "./Nav"

const Header = () => {
  return (
    <>
      <header>
        <link rel="stylesheet" href="https://use.typekit.net/dgg7wjb.css" />
      </header>

      <Nav />

      <div className="relative">
        <div>
          <img src={horse} alt="horse" className="sm:w-full md:hidden" />
        </div>

        <div className="hero-video">
          <div className="sm:flex hidden">
            <video muted src={video} autoPlay loop></video>
          </div>

          <div className="absolute ml-32 -m-52  md:-mt-96">
            <div className="text-left ">
              <span className="text-bmt text-7xl md:text-8xl">
                data <br />
                <span className="text-bmtgray ">driven</span>
              </span>
            </div>

            <p className="text-bmt text-base md:text-2xl md">
              digital marketing experience
            </p>
          </div>
        </div>

        <div className=" ">
          <Link to="/" className="text-bmt ml-4 md:flex justify-end">
            Let's work together →
          </Link>
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
