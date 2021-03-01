import React, { useState, useRef, useEffect } from "react"
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick"
import "../styles/DropDownMenu.css"

import { Link } from "gatsby"

export default function DropDowMenu() {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const onClick = () => setIsActive(!isActive)

  useEffect(() => {
    const pageClickEvent = e => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive)
      }
    }

    if (isActive) {
      window.addEventListener("click", pageClickEvent)
    }
    return () => {
      window.removeEventListener("click", pageClickEvent)
    }
  }, [isActive])

  return (
    <>
      <header>
        <link rel="stylesheet" href="https://use.typekit.net/dgg7wjb.css" />
      </header>
      <div className="">
        <button
          onClick={onClick}
          className="bg-pink-800 rounded-full w-12 h-12 hover:bg-pink-700 py-2 px-4 rounded inline-flex items-center"
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
          <ul className="">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/project">work</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
