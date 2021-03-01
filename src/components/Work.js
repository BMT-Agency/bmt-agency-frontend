import React from "react"
import packaging from "../images/Packaging Square.jpg"
import social from "../images/SocialmediaProject .png"
import screen from "../images/ScreenShot.png"

export default function Work() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-5 mb-24">
        <div className="col-span-2 flex flex-col justify-between">
          <h1 className="text-primary text-2xl md:text-8xl leading-tight m-24">
            work
          </h1>
          <p className="text-secondary ">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

        <div className="container mx-auto p-0 col-span-2 mt-32 mb-32">
          <div className="mb-8">
            <span className="text-secondary">Explore our work</span>
          </div>

          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3">
              <img src={packaging} alt="packaging" />
            </div>

            <div className="col-span-2">
              <img src={social} alt="social" />
            </div>

            <div className="row-span-2 col-span-2">
              <img src={screen} alt="screen" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
