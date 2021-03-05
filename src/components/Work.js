import React from "react"
import packaging from "../images/Packaging Square.jpg"
import donuts from "../images/donuts.jpg"

export default function Work() {
  return (
    <>
      <div>
        <div>
          <p className="text-primary text-6xl mt-32 ml-4 mb-4 md:text- ">
            work
          </p>
          <p className="text-secondary text-sm mb-8 ml-4 mr-16 md:hidden">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

        <div className="md:grid grid-rows-3 grid-flow-col md:grid grid-cols-3 ">
          <div></div>

          <div className="row-span-3">
            <img src={packaging} alt="packaging" />
          </div>

          <div className="sm:display hidden md:flex ">
            <div className="row-span-2">
              <img src={donuts} alt="screen" className="transform rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
