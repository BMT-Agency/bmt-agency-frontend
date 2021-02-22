import React from "react"

export default function OurClients() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-red-400 pt-8px">
        <div>
          <h1 className="text-7xl ">Our Clients</h1>
        </div>

        <div className="container mx-auto p-0 col-span-2">
          <div className="flex flex-row flex-wrap -mx-2 bg-red-600">
            <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
              <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
