import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import video from "../images/video/Caballo 2.mp4"

import Nav from "./Nav"

const Header = () => {
  return (
    <>
      <header>
        <link rel="stylesheet" href="https://use.typekit.net/dgg7wjb.css" />
      </header>

      <Nav />
      <div className="container h-screen">
        <div className=" md:mx-auto md:flex md:items-center md:justify-between">
          <video
            muted
            src={video}
            autoPlay
            loop
            className="absolute top-0 ml-52 "
          ></video>

          <div className="mt-60 ml-60">
            <span className=" text-primary text-5xl md:text-9xl leading-tight mb-4 absolute">
              data <br />
              <span className=" text-secondary text-5xl md:text-9xl leading-tight mb-4">
                driven
              </span>
              <p className="text-primary mt-8 md:text-3xl md:pr-48">
                digital marketing experience
              </p>
            </span>
          </div>
          <div className=" flex justify-end">
            <Link to="/" className="p-4 text-primary pt-10 text-end ml-38">
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
