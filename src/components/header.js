import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import horseResponsive from "../images/video/horseResponsive.mp4"
import video from "../images/video/horse.mp4"

import DropDowMenu from "./DropDowMenu"

import Nav from "./Nav"

const Header = () => {
  return (
    <>
      <Nav />

      <div className="bg-responsive container relative overflow-hidden -mt-44 ">
        <div className="sm:w-full md:hidden">
          <video muted src={horseResponsive} autoPlay loop></video>
        </div>

        <div className="hero-video mt-12">
          <div className="sm:flex hidden ml-80">
            <video muted src={video} autoPlay loop></video>
          </div>

          <div className="absolute ml-40 -mt-96 md:ml-16 -m-52  md:-mt-96">
            <div className="text-right md:text-left md:-mt-28">
              <span className="text-bmt text-5xl md:text-9xl">
                data <br />
                <span className="text-bmtgray ">driven</span>
              </span>
            </div>

            <p className="text-bmt text-sm md:text-2xl md">
              digital marketing experience
            </p>
          </div>

          <div className="-mt-24 relative ">
            <Link to="/contact" className="text-bmt ml-4 md:flex justify-end">
              Let's work together →
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
