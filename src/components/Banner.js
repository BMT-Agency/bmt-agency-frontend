import React from "react"
import banner from "../images/banner.jpg"

export default function Banner() {
  return (
    <div className="container flex">
      <p className="text-gray-400 text-5xl p-24">
        We do <span className="font-bold">amazing things</span> with
        <span className="font-bold">amazing businesses.</span>
      </p>

      <img src={banner} className="w-1/2" />
    </div>
  )
}
