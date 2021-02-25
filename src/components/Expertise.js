import React from "react"

import marketing from "../images/expertise/Marketing Consulting.jpg"
import digital from "../images/expertise/Digital Marketing.jpg"
import btl from "../images/expertise/BTL.jpg"
import graphic from "../images/expertise/Graphic Design and Corporate Identity.jpg"
import multimedia from "../images/expertise/Multimedia.jpg"
import neuro from "../images/expertise/Neuromarketing.jpg"

export default function Expertise() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-4 p-5 mb-24">
          <div className="col-span-1 flex flex-col justify-between">
            <h1 className=" font-bold text-pink-700 text-2xl md:text-8xl leading-tight m-24">
              expertise
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="text-pink-700">
                Marketing <span className="text-gray-500">Consulting</span>{" "}
              </span>
              <img
                src={marketing}
                alt="marketing consulting"
                className="w-full block rounded mt-9"
              />
            </div>

            <div>
              <span className="text-pink-700">
                Digital <span className="text-gray-500">Marketing</span>{" "}
              </span>
              <img
                src={digital}
                alt="marketing dgital"
                className="w-full block rounded mt-9"
              />
            </div>

            <div>
              <span className="text-pink-700">BTL </span>
              <img src={btl} alt="btl" className="w-full block rounded mt-9" />
            </div>

            <div>
              <span className="text-pink-700">
                Graphic <span className="text-gray-500">Design</span>{" "}
              </span>
              <img
                src={graphic}
                alt="graphic design"
                className="w-full block rounded mt-9"
              />
            </div>

            <div>
              <span className="text-pink-700">Multimedia</span>
              <img
                src={multimedia}
                alt="multimedia"
                className="w-full block rounded mt-9"
              />
            </div>

            <div>
              <span className="text-pink-700">Neuromarketing</span>
              <img
                src={neuro}
                alt="neuromarketing"
                className="w-full block rounded mt-9"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
