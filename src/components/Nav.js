import React from "react"
import logo from "../images/bmt-logo-purple.svg"
import DropDowMenu from "./DropDowMenu"

export default function Nav() {
  return (
    <div className="lg:container pl-4 sticky z-10 top-0 bg-opacity-0 w-auto">
      <nav className="flex items-center sticky justify-between">
        <div className="flex items-center flex-no-shrink text-white mr-6  ">
          <img src={logo} alt="logo" />
        </div>

        <div className=" w-8 mb-2 h-0.25 flex justify-end content-around ">
          <a
            href="https://www.facebook.com/bmtagency"
            target="_blank"
            className="md:inline-block py-1 md:py-4 text-bmt font-light hover:text-primary  ml-4 "
          >
            FB
          </a>
          <a
            href="https://www.instagram.com/bmtagency/"
            target="_blank"
            className="inline-block py-1 md:py-4 text-bmt font-light hover:text-primary sm:flex  ml-4"
          >
            IG
          </a>
          <a
            href="https://www.youtube.com/channel/UCrYRjxHcsq8PR9yLADh6fIA/featured"
            target="_blank"
            className=" inline-block py-1 md:py-4 text-bmt font-light hover:text-primary ml-4 "
          >
            YT
          </a>

          {/* <a
              href="#"
              className=" ml-16  inline-block py-1 md:py-4 text-bmt font-light hover:text-primary mr-6 md:ml-32 md:ml-0 "
            >
              EN
            </a> */}
        </div>
      </nav>
      <DropDowMenu />
    </div>
  )
}
