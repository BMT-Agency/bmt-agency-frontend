import React from "react"

export default function Footer() {
  return (
    <>
      <div className="bg-pink-900 grid grid-cols-2">
        <h1 className="text-8xl text-white mt-80 mb-20">
          Let's work <br /> together
        </h1>
        <h1 className="text-8xl text-white mt-80 mb-20">
          contact <br />
          us
        </h1>
      </div>

      <div className="bg-pink-900 grid grid-cols-2">
        <div>
          <h1 className="text-2xl text-white mt-12 mb-20">Logo BMT</h1>
        </div>

        <div className="col-end-7 mt-12 m-12  text-white">
          <p>Sitemap</p>
          <p>Home</p>
          <p>Agency</p>
          <p>Services</p>
          <p>Work</p>
          <p>Let's work together</p>
        </div>
        <div className="mt-8 mr-8 col-end-6 ">
          <input placeholder="enter your email" className=""></input>
          <button className="mt-8 col-span-2 ml-16 mr-8 text-white">
            join
          </button>
        </div>
      </div>
    </>
  )
}
