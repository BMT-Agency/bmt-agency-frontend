import React from "react"
import banner from "../images/banner.jpg"

export default function Banner() {
  return (
    <div className="grid grid-cols-1 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="text-secondary text-7xl font-light p-24 ">
          we do <span className="font-medium">amazing things</span> with{" "}
          <span className="font-medium">amazing businesses.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src={banner} alt="banner" className="w-screen"/>
      </div>
    </div>
  )
}
