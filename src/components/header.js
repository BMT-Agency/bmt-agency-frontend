import React from "react"
import { Link } from "gatsby"
import VideoBg from "reactjs-videobg"
import horseResponsive from "../images/video/horseResponsive.mp4"
import video from "../images/video/horse.mp4"

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

      <div className="relative overflow-hidden -mt-44">
        <div className="sm:w-full md:hidden">
          <video muted src={horseResponsive} autoPlay loop></video>
        </div>

        <div className="hero-video mt-12">
          <div className="sm:flex hidden ml-80">
            <video muted src={video} autoPlay loop></video>
          </div>

          <div className="absolute ml-32 -m-52  md:-mt-96">
            <div className="text-left -mt-32">
              <span className="text-bmt text-6xl md:text-9xl">
                data <br />
                <span className="text-bmtgray ">driven</span>
              </span>
            </div>

            <p className="text-bmt text-sm md:text-2xl md">
              digital marketing experience
            </p>
          </div>
        </div>

        <div className=" ">
          <Link to="/contact" className="text-bmt ml-4 md:flex justify-end">
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
