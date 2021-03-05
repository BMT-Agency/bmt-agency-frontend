import React from "react"
import { Link } from "gatsby"
import arrowRigth from "../images/icons/Arrow Right.svg"
import logo from "../images/bmt-logo-white.svg"
import "../styles/DropDownMenu.css"

export function FooterOne() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-purple text-center ">
          <div className="flex justify-center m-16 ">
            <Link to="/work" className="text-white text-6xl ">
              work →
            </Link>
          </div>
        </div>

        <div className="bg-rouge text-center  ">
          <div className="flex justify-center m-16">
            <Link to="/contact" className="text-white text-5xl">
              contact →
            </Link>
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
        </div>

        <div className="text-white md:text-end">
          <div className="flex flex-col mt-8 ">
            <Link
              to="/"
              className="text-2xl leading-8
"
            >
              Sitemap
            </Link>
            <Link
              to="/"
              className="text-sm font-light leading-8
"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="text-sm font-thin leading-8
"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="text-sm font-thin leading-8
"
            >
              Contact
            </Link>
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
              <Link
                to="/"
                className="border-2 border-white font-bold text-white ml-4 p-4 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6"
              >
                Join
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-white text-sm font-thin">
            BMT Agency &copy; 2021.All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default {
  FooterOne,
}
