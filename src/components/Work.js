import React from "react"
import packaging from "../images/Packaging Square.jpg"
import donuts from "../images/donuts.jpg"
import donutrotate from "../images/donutrotate.jpg"

export default function Work() {
  return (
    <>
      <div>
        <div className="md:ml-16">
          <p className="text-bmt text-6xl mt-32 mb-4 md:text- ">work</p>
          <p className="text-bmtgray text-sm mb-8 md:hidden">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

        <div className="md:grid grid-cols-3  ">
          <div></div>

          <div className="">
            <img src={packaging} alt="packaging" className="md:h-7/12" />
          </div>

          <div className="  transform md:-rotate-90 ">
            <img src={donuts} alt="screen" className="" />

            {/* <div className="display hidden">
                <img src={donutrotate} alt="donut" className="w-5/12  " />
              </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
