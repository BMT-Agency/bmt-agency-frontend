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
      <div className="container h-screen ">
        <div className="grid grid-cols-2 gap-4 p-5 mb-24 row-span-full">
          <div className="col-span-1 flex flex-col justify-between">
            <h1 className="  text-primary text-2xl md:text-8xl leading-tight m-24">
              expertise
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="text-primary">
                Marketing <span className="text-secondary">Consulting</span>{" "}
              </span>
              <img
                src={marketing}
                alt="marketing consulting"
                className="w-full block rounded mt-9  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 "
              />
            </div>

            <div>
              <span className="text-primary">
                Digital <span className="text-secondary">Marketing</span>{" "}
              </span>
              <img
                src={digital}
                alt="marketing dgital"
                className="w-full block rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
              />
            </div>

            <div>
              <span className="text-primary">BTL </span>
              <img
                src={btl}
                alt="btl"
                className="w-full block rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
              />
            </div>

            <div>
              <span className="text-primary">
                Graphic <span className="text-secondary">Design</span>{" "}
              </span>
              <img
                src={graphic}
                alt="graphic design"
                className="w-full block rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
              />
            </div>

            <div>
              <span className="text-primary">Multimedia</span>
              <img
                src={multimedia}
                alt="multimedia"
                className="w-full block rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
              />
            </div>

            <div>
              <span className="text-primary">
                Web & <span className="text-secondary">Development</span>{" "}
              </span>
              <img
                src={web}
                alt="neuromarketing"
                className="w-full block rounded mt-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
