import React from "react"
import banner from "../images/banner.jpg"

export default function Banner() {
  return (
    <>
      <div className="md:grid grid-cols-2">
        <div className="mt-40 ml-4">
          <p className="text-secondary text-5xl font-light md:ml-16 md:mt-16 ">
            we do <span className="font-medium">amazing things</span> with
            <span className="font-medium">amazing businesses.</span>
          </p>
        </div>
        <div className="mt-20">
          <img src={banner} alt="banner" className="" />
        </div>
      </div>
    </>
  )
}
