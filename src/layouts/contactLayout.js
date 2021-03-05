/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Nav from "../components/Nav"
import Header from "../components/header"
import { Footer } from "../components/Footer"

export default function ContactLayout(props) {
  const { siteTitle } = props

  return (
    <>
      <Nav />
      <div className="mb-20 ml-28">
        <p className="text-6xl text-pink-900 font-bold mb-8">contact</p>
        <span className="text-gray-400">
          To associate the characteristics of BMT as <br /> an agency, the
          retorical image of horses
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-28 container mb-60">
        <div>
          <div className="my-8 mx-4 md:mx-2 border-b-2 border-pink-700 hover:border-pink-800 ">
            <label className="self-center "></label>
            <input
              className="w-full py-3 pl-5 md:pl-20 border-0 focus:outline-none placeholder-pink-700"
              type="text"
              autocomplete="on"
              required
              placeholder="Complete name"
            />
          </div>

          <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-pink-700 hover:border-pink-800">
            <label className="self-center text-pink-600"></label>
            <input
              className="w-full py-3 pl-2 md:pl-8 border-0 focus:outline-none placeholder-pink-700"
              type="phone"
              placeholder="Phone"
              required
            />
          </div>

          <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-pink-700 hover:border-pink-800">
            <label className="self-center text-pink-600"></label>
            <input
              className="w-full py-3 pl-2 md:pl-8 border-0 focus:outline-none placeholder-pink-700"
              type="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div>
          <div className="ml-8 ">
            <p className="text-pink-700 mt-4 mb-8">
              {" "}
              what type of project are you looking for? (check all that aplply)
            </p>

            <div className="grid  md:grid-cols-2">
              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-pink-700 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  {" "}
                  <span className="ml-2 text-pink-600 font-bold">
                    marketing{" "}
                    <span className="text-pink-600 font-light">consulting</span>
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-pink-700 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  {" "}
                  <span className="ml-2 text-pink-600 font-bold">
                    digital{" "}
                    <span className="text-pink-600 font-light">marketing </span>
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-pink-700 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  {" "}
                  <span className="ml-2 text-pink-600 font-bold">
                    neuromarketing
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-pink-700 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  <span className="ml-2 text-pink-600 font-bold">BTL</span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-pink-700 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  <span className="ml-2 text-pink-600 font-bold">
                    graphic{" "}
                    <span className="text-pink-600 font-light">design</span>
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-pink-700 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  <span className="ml-2 text-pink-600 font-bold">
                    multimedia
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-pink-700 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  <span className="ml-2 text-pink-600 font-bold">website</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex mx-auto items-center justify-center  mb-4 max-w-lg">
            <form className="w-4/5 max-w-xl bg-white rounded-lg px-4 pt-2">
              <div className="flex flex-wrap ">
                <div className="w-1/3 md:w-full px-3 mb-2 mt-2">
                  <textarea
                    className="bg-gray-100 text-center rounded border border-pink-700 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-pink-700 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>
              </div>
            </form>
            <div className=" w-4/5">
              <button className="bg-pink-700 text-white text-2xl  ">
                request quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
