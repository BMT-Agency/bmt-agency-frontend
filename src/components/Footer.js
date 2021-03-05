import React from "react"
import { Link } from "gatsby"
import arrowRigth from "../images/icons/Arrow Right.svg"
import logo from "../images/bmt-logo-white.svg"
import "../styles/DropDownMenu.css"


export function FooterOne() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-purple text-center h-96 mt-64">
          <div className="flex justify-center mt-72">
            <span className="text-white text-6xl font-bold">work</span>
            <img src={arrowRigth} />
          </div>
        </div>

        <div className="bg-rouge text-center mt-64 ">
          <div className="flex justify-center mt-72">
            <Link to="/contact" className="text-white text-6xl font-bold">
              contact
            </Link>
            <img src={arrowRigth} />
          </div>
        </div>
      </div>
    </>
  )
}

export function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-purple p-12">
        <div className="ml-16">
          <img src={logo} alt="logo" className />

          <div className="mt-56">
            <p className="text-white">
              BMT Agency &copy; 2021.All rights reserved.
            </p>
          </div>
        </div>

        <div className="text-white text-right ">
          <div className="flex flex-col mt-8">
            <Link to="/" className="text-2xl">
              Sitemap
            </Link>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="flex justify-end mt-40 items-center">
            <div className="flex w-60 my-8 mx-4 md:mx-2 border-b-2 border-white hover:border-white">
              <div className="">
                <input
                  className="w-full mt-8 md:pl-8 border-0 focus:outline-none text-white bg-pink-800"
                  placeholder="enter your email"
                  type="email"
                  required
                />
              </div>
            </div>

            <div>
              <a
                href=""
                className="border-2 border-white font-bold text-white ml-4 px-12  py-4 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default {
  FooterOne,
}
