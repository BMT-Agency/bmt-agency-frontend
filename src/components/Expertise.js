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
          <h1 className="text-primary text-6xl mt-32 ml-4 mb-4 md:text-6xl ">
            expertise
          </h1>
          <p className="text-secondary text-sm mb-8 ml-4 mr-16 md:hidden">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

        <div className="ml-4 md:grid grid-cols-3">
          <div></div>
          <div className="md:flex md:flex-col">
            <span className="text-primary mr-16 ">
              Marketing <span className="text-secondary">Consulting</span>{" "}
            </span>
            <img
              src={marketing}
              alt="marketing consulting"
              className="w-full md:mb-12 md:w-4/6 rounded mt-9  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 "
            />
          </div>

          <div className="sm:flex hidden md:flex md:flex-col ">
            <span className="text-primary  mr-16  ">
              Digital <span className="text-secondary">Marketing</span>{" "}
            </span>
            <img
              src={digital}
              alt="marketing dgital"
              className="w-full md:mb-12 md:w-4/6 rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>
          <div></div>

          <div className="sm:flex hidden md:flex md:flex-col">
            <span className="text-primary  mr-16">BTL </span>
            <img
              src={btl}
              alt="btl"
              className="w-full md:mb-12 md:w-4/6 rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>

          <div className="sm:flex hidden md:flex md:flex-col">
            <span className="text-primary  mr-16 ">
              Graphic <span className="text-secondary">Design</span>{" "}
            </span>
            <img
              src={graphic}
              alt="graphic design"
              className="w-full md:mb-12 md:w-4/6 rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>
          <div></div>

          <div className="sm:flex hidden md:flex md:flex-col">
            <span className="text-primary  mr-16 ">Multimedia</span>
            <img
              src={multimedia}
              alt="multimedia"
              className="w-full md:mb-12 md:w-4/6 rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>

          <div className="sm:flex hidden md:flex md:flex-col">
            <span className="text-primary  mr-16  ">
              Web<span className="text-secondary"> & Development</span>{" "}
            </span>
            <img
              src={web}
              alt="neuromarketing"
              className="w-full md:mb-12 md:w-4/6 block rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>
        </div>
      </div>
    </>
  )
}
