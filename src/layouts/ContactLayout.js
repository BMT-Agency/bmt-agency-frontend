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
import "../styles/Contact.css"


export default function ContactLayout(props) {
  const { siteTitle } = props

  return (
    <>
      <Nav />

      <div className="ml-8">
          <h1 className="text-primary text-6xl mr-4">
            contact
          </h1>
          <p className="text-secondary text-sm mr-4">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-4 container mb-60">
        <div className="wrapper">
          <div className="my-2 mx-4 md:mx-2 border-b-2 ">
            <label className="self-center "></label>
            <input
              className="w-full py-3 pl-5 md:pl-20 border-0 focus:outline-none"
              type="text"
              autocomplete="on"
              required
              placeholder="Complete name"
            />
          </div>

          <div className="flex my-8 mx-4 md:mx-2 border-b-2">
            <label className="self-center"></label>
            <input
              className="w-full py-3 pl-2 md:pl-8 border-0 focus:outline-none"
              type="phone"
              placeholder="Phone"
              required
            />
          </div>

          <div className="flex my-8 mx-4 md:mx-2 border-b-2">
            <label className="self-center"></label>
            <input
              className="w-full py-3 pl-2 md:pl-8 border-0 focus:outline-none"
              type="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div>
          <div className="ml-8 ">
            <p className="text-primary mt-4 mb-8">
              {" "}
              what type of project are you looking for? (check all that aplply)
            </p>

            <div className="grid  md:grid-cols-2">
              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-purple w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
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
                  <span className="ml-2 text-primary font-bold">
                    marketing{" "}
                    <span className="text-primary font-light">consulting</span>
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-purple  w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
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
                  <span className="ml-2 text-primary font-bold">
                    digital{" "}
                    <span className="text-primary font-light">marketing </span>
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-purple w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
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
                  <span className="ml-2 text-primary font-bold">
                    neuromarketing
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-purple w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  <span className="ml-2 text-primary font-bold">BTL</span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-purple w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  <span className="ml-2 text-primary font-bold">
                    graphic{" "}
                    <span className="text-primary font-light">design</span>
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-purple w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  <span className="ml-2 text-primary font-bold">
                    multimedia
                  </span>
                </div>
              </label>

              <label className="flex justify-start items-start  mb-4">
                <div className="bg-white border-2 rounded border-purple w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <div className="select-none">
                  <span className="ml-2 text-primary font-bold">website</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 items-center justify-center mb-4 max-w-lg">
            <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
              <div className="flex flex-wrap ">
                <div className="px-3 mb-2 mt-2">
                  <textarea
                    className="bg-gray-100 text-center text-primary rounded border border-purple leading-normal resize-none w-72 h-64 py-2 px-3 font-medium placeholder-text-purple focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>
              </div>
            </form>
            <div className="w-full">
              <button className="bg-purple border-2 rounded py-2 px-3 text-white ml-8 text-2xl w-72">
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
