import React, { useState, useRef, useEffect } from "react"

import "../styles/DropDownMenu.css"

import Close from "./icons/Close"
import Fb from "../components/icons/Fb"
import Instagram from "../components/icons/Instagram"
import YT from "../components/icons/YT"
import logo from "../images/bmt-logo-white.svg"
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
      <button
        onClick={handleOpen}
        className="btn-menu bg-bmt rounded-full  w-12 h-12 focus:outline-none hover:bg-pink-700 py-2 px-4 rounded inline-flex items-center"
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
        <div className="text-center">
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

          <div className="flex mt-16 ml-12 md:ml-40">
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
          <button
            className="btn-close focus:outline-none  "
            onClick={handleClose}
          >
            <Close />
          </button>
        </div>
      </nav>
    </>
  )
}
