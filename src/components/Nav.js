import React from "react"
import logo from "../images/bmt-logo-purple.svg"
import DropDowMenu from "./DropDowMenu"

export default function Nav() {
  return (
    <div className="container pl-24 pt-8 sticky z-10 top-0 bg-opacity-0 w-screen">
      <nav className="flex items-center sticky justify-between ">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <div className=" w-8 mb-2 h-0.25 -ml-32 flex">
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-primary hover:text-primary mr-6"
            >
              FB
            </a>
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-primary hover:text-primary mr-6"
            >
              IG
            </a>
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-primary hover:text-primary mr-6"
            >
              YT
            </a>

            <a
              href="#"
              className="inline-block ml-36 py-1 md:py-4 text-primary hover:text-primary mr-6 md:ml-32"
            >
              EN
            </a>
          </div>
        </div>
      </nav>
      <div className="flex flex-row-reverse space-x-4 space-x-reverse">
        <DropDowMenu />
      </div>
    </div>
  )
}
