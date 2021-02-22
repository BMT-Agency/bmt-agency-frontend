import React from "react"

import marketing from "../images/MarketingConsulting .png"

export default function Expertise() {
  return (
    <>
      {/* <div className="grid grig-cols-3 p-5">
       
        <div className="col-span-2">
          <h1 className="text-pink-900 text-8xl">Expertise</h1>
        </div>

        <div className="col-span-2">
          <div className="group relative">
            <img className="w-full block rounded " src={marketing} alt="" />
          </div>
          {/* <!-- END OF CARD 1 -->

          <div className=" shadow-lg rounded p-3">
            <div className="group relative">
              <img className="w-full block rounded" src={marketing} alt="" />
            </div>
          </div>
 
        </div>
      </div> */}

      <div className="grid grid-cols-4 gap-4 p-5 mb-24">
        <div className="col-span-2 flex flex-col justify-between">
          <h1 className=" text-pink-900 text-8xl">expertise</h1>
          <p className="text-gray-400 ">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

        <div className="col-span-1 mt-32 mb-32">
          <span className="text-pink-800">
            Marketing <span className="text-gray-400"> Consulting</span>
          </span>
          <img src={marketing} className="w-full block rounded mt-9" />
        </div>
        <div className="col-span-1 flex flex-col mt-32 mb-32">
          <span className="text-pink-700">
            Digital <span className="text-gray-400">Marketing</span>
          </span>
          <img src={marketing} className="w-full block rounded mt-9" />
        </div>
      </div>
    </>
  )
}
