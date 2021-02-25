import React from "react"
import Nav from "../components/Nav"
import { FooterOne, Footer } from "../components/Footer"

import headerbg from "../images/projects/Frame.png"
import logo from "../images/projects/logo.svg"
import imgOne from "../images/projects/1.png"
import two from "../images/projects/2.png"
import five from "../images/projects/5.png"
import four from "../images/projects/4.png"

import PropTypes from "prop-types"

export default function ProjectLayout() {
  return (
    <>
      <Nav />
      <div className="w-full">
        <img src={headerbg} className="w-full" />
      </div>

      <div className="grid grid-cols-2 mt-16 ml-16">
        <div className="flex justify-evenly">
          <div>
            <p className="text-gray-400 font-light mt-4">
              client <br />
              <span className="text-gray-400 text-2xl font-semibold">
                tropical pops
              </span>{" "}
            </p>
            <p className="text-gray-400 font-light mt-4">
              year <br />
              <span className="text-gray-400 text-2xl font-semibold">
                2019
              </span>{" "}
            </p>
            <p className="text-gray-400 font-light mt-4">
              category <br />
              <span className="text-gray-400 text-2xl font-semibold">
                Branding <br /> Packaging
              </span>{" "}
            </p>

            <div className="mt-24">
              <p className="text-gray-400">
                To associate the characteristics of BMT as an agency,the
                rhetorical image of horses.To associate the characteristics of
                BMT as an agency,the rhetorical image of horses.To associate the
                characteristics of BMT as an agency,the rhetorical image of
                horses.To associate the characteristics of BMT as an agency,the
                rhetorical image of horses.
              </p>
            </div>
          </div>

          <div>
            <img src={logo} className="w-72" />
          </div>
        </div>

        <div>
          <img src={imgOne} />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <img src={two} />
        </div>

        <div className="mt-96 ml-24">
          <p className="text-gray-400">
            To associate the characteristics of BMT as an agency,the rhetorical
            image of horses.To associate the characteristics of BMT as an
            agency,the rhetorical image of horses.To associate the
            characteristics of BMT as an agency,the rhetorical image of
            horses.To associate the characteristics of BMT as an agency,the
            rhetorical image of horses.
            <br />
            <br />
            To associate the characteristics of BMT as an agency,the rhetorical
            image of horses.To associate the characteristics of BMT as an
            agency,the rhetorical image of horses.To associate the
            characteristics of BMT as an agency,the rhetorical image of
            horses.To associate the characteristics of BMT as an agency,the
            rhetorical image of horses.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="mt-96 ml-24">
          <p className="text-gray-400">
            To associate the characteristics of BMT as an agency,the rhetorical
            image of horses.To associate the characteristics of BMT as an
            agency,the rhetorical image of horses.To associate the
            characteristics of BMT as an agency,the rhetorical image of
            horses.To associate the characteristics of BMT as an agency,the
            rhetorical image of horses.
            <br />
            <br />
            To associate the characteristics of BMT as an agency,the rhetorical
            image of horses.To associate the characteristics of BMT as an
            agency,the rhetorical image of horses.To associate the
            characteristics of BMT as an agency,the rhetorical image of
            horses.To associate the characteristics of BMT as an agency,the
            rhetorical image of horses.
          </p>
        </div>

        <div>
          <img src={five} className="w-9/12" />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <img src={four} />
        </div>

        <div className="mt-96 ml-24">
          <p className="text-gray-400">
            To associate the characteristics of BMT as an agency,the rhetorical
            image of horses.To associate the characteristics of BMT as an
            agency,the rhetorical image of horses.To associate the
            characteristics of BMT as an agency,the rhetorical image of
            horses.To associate the characteristics of BMT as an agency,the
            rhetorical image of horses.
            <br />
            <br />
            To associate the characteristics of BMT as an agency,the rhetorical
            image of horses.To associate the characteristics of BMT as an
            agency,the rhetorical image of horses.To associate the
            characteristics of BMT as an agency,the rhetorical image of
            horses.To associate the characteristics of BMT as an agency,the
            rhetorical image of horses.
          </p>
        </div>
      </div>

      <FooterOne />
      <Footer />
    </>
  )
}

ProjectLayout.propTypes = {
  siteTitle: PropTypes.string,
}
