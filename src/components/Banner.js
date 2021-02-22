import React from "react"
import banner from "../images/banner.png"

export default function MiddleSection() {
  return (
    <div>
      <header className="pb-8 contents px-8 py-2 body mt-20 mx-8  ">
        <div className="">
          <div className="absolute">
            <h1 className="text-4xl text-gray-400 ">
              we do amazing things
              <br /> with amazing bussines.
            </h1>
          </div>
          <div className="relative">
            <img src={banner} />
          </div>
        </div>
      </header>
    </div>
  )
}
