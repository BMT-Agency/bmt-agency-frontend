import React from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import { Footer } from "../components/Footer"
import PropTypes from "prop-types"
import Pagination from "../components/Pagination"

export default function WorkLayout(props) {
  const { projects, pageContext } = props
  console.log(projects)
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
      <Pagination pageContext={pageContext} />
      <Footer />
    </>
  )
}
WorkLayout.propTypes = {
  siteTitle: PropTypes.string,
}