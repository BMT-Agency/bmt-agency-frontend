import React from "react"
import packaging from "../images/PackagingProject.jpg"
import social from "../images/SocialmediaProject .png"
import screen from "../images/ScreenShot.png"

export default function Work() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-5 mb-24">
        <div className="col-span-2 flex flex-col justify-between">
          <h1 className="text-8xl text-pink-900 ">Work</h1>
          <p className="text-gray-400 ">
            To associate the characteristics of BMT as an agency, the rhetorical
            image of horses.
          </p>
        </div>

        <div className="container mx-auto p-0 col-span-2 mt-32 mb-32">
          <div className="mb-8">
            <span className="text-gray-400">Explore our work</span>
          </div>

          <div className="flex flex-row flex-wrap -mx-2">
            <div className="w-96 md:w-1/2 h-96 md:h-auto mb-4 pl-0">
              <img
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                src={packaging}
                title="Link"
              />
            </div>

            <div className="w-24 md:w-1/2 mb-4 ">
              <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                  <img
                    className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    src={social}
                    title="Link"
                  />
                </div>
                <div className="w-24 sm:w-1/2 md:w-full h-48 xl:h-64">
                  <img
                    className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    src={screen}
                    title="Link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
