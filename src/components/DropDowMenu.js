import React, { useState, useRef, useEffect } from "react"

import "../styles/DropDownMenu.css"

import Close from "./icons/Close"
import Fb from "../components/icons/Fb"
import Instagram from "../components/icons/Instagram"
import YT from "../components/icons/YT"
import { Link } from "gatsby"

export default function DropDowMenu() {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  const handleOpen = () => {
    setIsActive(!isActive)
  }

  const handleClose = () => {
    if (isActive === true) {
      setIsActive(!isActive)
    }
  }

  return (
    <>
      <header>
        <link rel="stylesheet" href="https://use.typekit.net/dgg7wjb.css" />
      </header>

      <div className="text-right ">
        <button
          onClick={handleOpen}
          className="bg-bmt rounded-full w-12 h-12 focus:outline-none hover:bg-pink-700 py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            width="20"
            height="8"
            viewBox="0 0 20 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7.77777H19.9653V5.55555H0V7.77777ZM0 2.22222H19.9653V0H0V2.22222Z"
              fill="white"
            />
          </svg>
        </button>

        <nav ref={dropdownRef} className={`navBar ${isActive && "isActive"}`}>
          <div className="text-center md:ml-96">
            <ul className="">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/work">work</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <div className="flex mt-16 ml-40">
              <a href="https://www.facebook.com/bmtagency" target="_blank">
                <Fb className="mr-4" />
              </a>
              <a href="https://www.instagram.com/bmtagency/" target="_blank">
                <Instagram className="mr-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCrYRjxHcsq8PR9yLADh6fIA/featured"
                target="_blank"
              >
                <YT className="mr-4" />
              </a>
            </div>
          </div>

          <div>
            <button className="focus:outline-none " onClick={handleClose}>
              <Close />
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}
