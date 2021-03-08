import React from "react"
import { Footer } from "../../components/Footer"

export default function Project(props) {
  const {
    pageContext: { data: project },
  } = props
  console.log("project:", project)
  return (
    <>
      <header>
        <link rel="stylesheet" href="https://use.typekit.net/dgg7wjb.css" />
      </header>
      <div>
        <img
          alt="challenge"
          src={project.mainImage.asset.url}
          className="w-auto h-auto md:w-full"
        />
      </div>

      <div className="grid grid-cols-2 ml-4 mt-4 md:mt-20 md:ml-12">
        <div>
          <p className="text-bmtgray font-light text-1xl">client</p>
          <p className="text-bmtgray text-1xl md:text-2xl">{project.client}</p>
          <p className="text-bmtgray font-light text-1xl">year</p>
          <p className="text-bmtgray text-1xl md:text-2xl">{project.year}</p>
        </div>

        {/* <div className="ml-16">
          <img src={project.logoClient.asset.url} />
        </div> */}
      </div>

      <div className="ml-4 mt-4 flex md:grid grid-cols-2">
        <div className="md:ml-8">
          <p className="text-bmtgray font-light text-1xl">category</p>
          <p className="text-bmtgray md:text-2xl  ">
            {project.projectCategory}
          </p>
        </div>

        <div className="md:-mt-44">
          <img src={project.challengImage.asset.url} />
        </div>
      </div>

      <div className="md:grid grid-cols-3">
        <p className="text-bmtgray font-light text-1xl p-4 md:ml-8 md:col-span-1 md:-mt-56 ">
          {project.challenge}
        </p>
      </div>

      <div className="md:grid grid-cols-2">
        <div>
          <img
            src={project.inspirationImage.asset.url}
            className=" w-11/12  md:w-full"
          />
        </div>

        <div>
          <p className="text-bmtgray font-light text-1xl p-4 md:ml-8 md:mt-72">
            {project.inspiration}
          </p>
        </div>
      </div>

      <div className=" md:grid grid-cols-2">
        <div>
          <p className="text-bmtgray font-light text-1xl p-4 md:mt-64 md:ml-8">
            {project.idea}
          </p>
        </div>
        <div className="w-full ">
          <img src={project.ideaImage.asset.url} className="md:-mt-4" />
        </div>
      </div>

      <div className="md:grid grid-cols-2">
        <div className="w-full">
          <img
            src={project.processImage.asset.url}
            className=" md:w-9/12 md:w-full md:mt-8 "
          />
        </div>

        <div>
          <p className="text-bmtgray font-light text-1xl p-4 md:mt-80 md:mr-8">
            {project.process}
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
