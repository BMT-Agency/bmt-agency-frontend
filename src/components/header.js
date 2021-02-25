import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/bmt-logo-purple.svg"
import bg from "../images/Brain.png"

import Nav from "./Nav"

const Header = ({ background }) => {
  console.log(background)
  return (
    // //component
    // <header
    //   className=" bg-fixed bg-red-500 border-t-2 border-blue-600 h-full"
    //   // style="background-image: url('https://ik.imagekit.io/q5edmtudmz/peter-lloyd-680526-unsplash_TYZn4kayG.jpg')"
    // >
    //   <div className="content px-8 py-2">
    //     <nav className="flex items-center justify-between">
    //       <h2 className="text-black-500 font-bold text-2xl ">{siteTitle}</h2>
    //     </nav>
    //     <div className="body mt-20 mx-8">
    //       <div className="md:flex items-center justify-between">
    //         <div
    //           className="w-full md:w-1/2 mr-auto"
    //           // style="text-shadow: 0 20px 50px hsla(0,0%,0%,8)"
    //         >
    //           <h1 className="text-4xl font-bold text-white tracking-wide">
    //             Video
    //           </h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <>
      <Nav />
      <div className="bg-hero-pattern">
        <div className=" bg-no-repeat bg-cover container bg-hero-pattern ">
          <div className=" px-4 py-4">
            <div className="md:mx-auto md:flex md:items-center md:justify-between  bg-hero-pattern">
              <div className="flex justify-between items-center bg-hero-pattern">
                <div className="inline-block cursor-pointer md:hidden"></div>
              </div>
              {/* 
              <div className="hidden md:block">
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
              </div> */}
            </div>
          </div>

          <div className=" md:overflow-hidden bg-hero-pattern">
            <div className="px-4 py-20 md:py-4">
              <div className="md:max-w-6xl md:mx-auto">
                <div className="md:flex md:flex-wrap">
                  <div className="md:w-1/2 text-center md:text-left md:pt-16">
                    <h1 className="font-bold text-pink-700 text-2xl md:text-8xl leading-tight mb-4">
                      data <br />
                      driven
                    </h1>

                    <p className="text-gray-400 md:text-xl md:pr-48">
                      digital marketing experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-end">
            <p className="p-4 text-pink-800 pt-10 text-end ml-38">
              Let's work together
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
