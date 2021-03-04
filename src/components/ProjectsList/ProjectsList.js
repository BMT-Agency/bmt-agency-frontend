import React from "react"
import { Link } from "gatsby"

export default function ProjectsList(props) {
  const { projects } = props

  return (
    <>
      {projects.map(project => {
        return (
          <div key={project.id} className="project-wrapper">
            <Link to={`/${project.slug.current}`}>
              <img
                src={project.mainImage.asset.url}
                className="w-auto h-auto md:w-full"
              />
            </Link>
          </div>
        )
      })}

      {/* <Pagination pageContext={pageContext} />
      <Footer /> */}
    </>
  )
}
