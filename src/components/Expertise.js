import React from "react"

import marketing from "../images/expertise/Marketing Consulting.jpg"
import digital from "../images/expertise/Digital Marketing.jpg"
import btl from "../images/expertise/BTL.jpg"
import graphic from "../images/expertise/Graphic Design and Corporate Identity.jpg"
import multimedia from "../images/expertise/Multimedia.jpg"
import web from "../images/expertise/Web and app development.jpg"

export default function Expertise() {
  return (
    <>
      <div>
        <div>
          <h1 className="text-bmt text-6xl mt-32 ml-4 mb-4 md:text-6xl ">
            expertise
          </h1>
          <p className="text-bmtgray text-sm mb-8 ml-4 mr-16 md:hidden">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

        <div className="ml-4 md:grid grid-cols-3">
          <div></div>
          <div className="md:flex md:flex-col">
            <span className="text-bmt">
              Marketing <span className="text-bmtgray">Consulting</span>{" "}
            </span>
            <img
              src={marketing}
              alt="marketing consulting"
              className="w-full md:mb-12 rounded mt-9  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 "
            />
          </div>

          <div className="sm:flex hidden md:flex md:flex-col ">
            <span className="text-bmt">
              Digital <span className="text-bmtgray">Marketing</span>{" "}
            </span>
            <img
              src={digital}
              alt="marketing dgital"
              className="w-full md:mb-1 rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>
          <div></div>

          <div className="md:flex-col">
            <span className="text-bmt">BTL </span>
            <img
              src={btl}
              alt="btl"
              className="w-full md:mb-12 rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>

          <div className="md:flex md:flex-col">
            <span className="text-bmt">
              Graphic <span className="text-bmtgray">Design</span>{" "}
            </span>
            <img
              src={graphic}
              alt="graphic design"
              className="w-full md:mb-12 rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>
          <div></div>

          <div className="md:flex md:flex-col">
            <span className="text-bmt">Multimedia</span>
            <img
              src={multimedia}
              alt="multimedia"
              className="w-full md:mb-12 rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>

          <div className="sm: md:flex md:flex-col">
            <span className="text-bmt">
              Web<span className="text-bmtgray"> & Development</span>{" "}
            </span>
            <img
              src={web}
              alt="neuromarketing"
              className="w-full md:mb-12 block rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>
        </div>
      </div>
    </>
  )
}
