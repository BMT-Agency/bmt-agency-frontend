import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"

import img from "../images/astronaut.png"
import PropTypes from "prop-types"

export default function ProjectLayout() {
  return (
    <>
      <header
        className="w-full h-96 bg-top bg-no-repeat bg-auto"
        style={{
          background: `url('https://images.unsplash.com/photo-1609342475528-dd7d93e8311e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80')`,
        }}
      ></header>

      <div className="container grid grid-cols-2 grid gap-x-8 mt-10">
        <div className="col-start-1 col-end-3 m-8">
          <h1 className="text-8xl">tropical pops</h1>
        </div>

        <div className="col-end-7 grid-gap-x-8  m-8">
          <span>year</span>
          <p>2021</p>
          <br />
          <span>categories</span>
          <p>UX/UI</p>
          <p>Branding</p>
          <p>Backend</p>
          <p>Frontend</p>
          <br />
          <span>country</span>
          <p>US</p>
        </div>
      </div>

      <div className="container grid grid-cols-2 mt-10">
        <div className="col-start-1 col-end-2 mt-40 m-8">
          <p className="text">
            To associate the characteristics of BMT as an agency, the <br />
            rhetorical image of horses. To associate the <br />
            characteristics of BMT as an agency, the . rhetorical
            <br /> image of horses. To associate the characteristics of BMT
            <br />
            as an agency, the . rhetorical image of horses.
            <br /> To associate the characteristics of BMT as an agency, the
            <br />
            rhetorical image of horses.
          </p>
        </div>

        <div className="col-end-7 col-span-2 ">
          <img src={img} className="w-3/4 h-auto" />
        </div>
      </div>

      <div className="container grid grid-cols-2 mt-10">
        <div className="col-start-0 col-end-2">
          <img src={img} className="w-3/4 h-auto" />
        </div>

        <div className="col-end-7 col-span-2 ">
          <p className="text">
            To associate the characteristics of BMT as an agency, the <br />
            rhetorical image of horses. To associate the <br />
            characteristics of BMT as an agency, the . rhetorical
            <br /> image of horses. To associate the characteristics of BMT
            <br />
            as an agency, the . rhetorical image of horses.
            <br /> To associate the characteristics of BMT as an agency, the
            <br />
            rhetorical image of horses.
          </p>
        </div>
      </div>

      <div className="container grid grid-cols-2 mt-10">
        <div className="col-start-1 col-end-2 mt-40 m-8">
          <p className="text">
            To associate the characteristics of BMT as an agency, the <br />
            rhetorical image of horses. To associate the <br />
            characteristics of BMT as an agency, the . rhetorical
            <br /> image of horses. To associate the characteristics of BMT
            <br />
            as an agency, the . rhetorical image of horses.
            <br /> To associate the characteristics of BMT as an agency, the
            <br />
            rhetorical image of horses.
          </p>
        </div>

        <div className="col-end-7 col-span-2 ">
          <img src={img} className="w-3/4 h-auto" />
        </div>
      </div>

      <div className="container grid grid-cols-2 mt-10">
        <div className="col-start-0 col-end-2">
          <img src={img} className="w-3/4 h-auto" />
        </div>

        <div className="col-end-7 col-span-2 ">
          <p className="text">
            To associate the characteristics of BMT as an agency, the <br />
            rhetorical image of horses. To associate the <br />
            characteristics of BMT as an agency, the . rhetorical
            <br /> image of horses. To associate the characteristics of BMT
            <br />
            as an agency, the . rhetorical image of horses.
            <br /> To associate the characteristics of BMT as an agency, the
            <br />
            rhetorical image of horses.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

ProjectLayout.propTypes = {
  siteTitle: PropTypes.string,
}
