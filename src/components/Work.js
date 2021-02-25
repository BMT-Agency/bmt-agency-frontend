import React from "react"
import packaging from "../images/Packaging Square.jpg"
import social from "../images/SocialmediaProject .png"
import screen from "../images/ScreenShot.png"

export default function Work() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-5 mb-24 ">
        <div className="col-span-2 flex flex-col justify-between">
          <h1 className="font-bold text-pink-700 text-2xl md:text-8xl leading-tight m-24">
            Work
          </h1>
          <p className="text-gray-400 ">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

        <div className="container mx-auto p-0 col-span-2 mt-32 mb-32">
          <div className="mb-8">
            <span className="text-gray-400">Explore our work</span>
          </div>

          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3">
              <img src={packaging} />
            </div>

            <div className="col-span-2">
              <img src={social} />
            </div>

            <div className="row-span-2 col-span-2">
              <img src={screen} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
