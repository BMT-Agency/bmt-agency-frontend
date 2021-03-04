import React from "react"

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

      <div className="grid grid-cols-2 ml-4 mt-4">
        <div>
          <p className="text-secondary font-light text-1xl">client</p>
          <p className="text-secondary text-1xl">{project.client}</p>
          <p className="text-secondary font-light text-1xl">year</p>
          <p className="text-secondary text-1xl">{project.year}</p>
        </div>

        {/* <div className="ml-16">
          <img src={project.logoClient.asset.url} />
        </div> */}
      </div>

      <div className="ml-4 mt-4 flex">
        <div>
          <p className="text-secondary font-light text-1xl">category</p>
          <p className="text-secondary ">{project.projectCategory}</p>
        </div>

        <div className="">
          <img src={project.challengImage.asset.url} />
        </div>
      </div>

      <div>
        <p className="text-secondary font-light text-1xl p-4">
          {project.challenge}
        </p>
      </div>

      <div className="">
        <img src={project.inspirationImage.asset.url} className=" w-11/12" />
      </div>

      <div>
        <p className="text-secondary font-light text-1xl p-4">
          {project.inspiration}
        </p>
      </div>

      <div className="w-full">
        <img src={project.ideaImage.asset.url} />
      </div>

      <div>
        <p className="text-secondary font-light text-1xl p-4">{project.idea}</p>
      </div>

      <div className="w-full">
        <img src={project.processImage.asset.url} />
      </div>

      <div>
        <p className="text-secondary font-light text-1xl p-4">
          {project.process}
        </p>
      </div>
    </>
  )
}
