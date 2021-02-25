import React from "react"
import logo from "../images/bmt-logo-purple.svg"

export default function Nav() {
  return (
    <div className="container pl-24 pt-8 sticky top-0 bg-opacity-0">
      <nav className="flex items-center justify-between  bg-teal p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <div className=" w-8 mb-2 h-0.25 -ml-32 flex">
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-pink-700 mr-6"
            >
              FB
            </a>
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-pink-700 mr-6"
            >
              IG
            </a>
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-pink-700 mr-6"
            >
              YT
            </a>
          </div>
        </div>

        {/* <div>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
          >
            EN
          </a>
        </div> */}
      </nav>
    </div>
  )
}
