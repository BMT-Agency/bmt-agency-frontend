import React from "react"

export default function ProjectsList(props) {
  console.log("props", props)
  const { projects } = props

  console.log("projects:", projects)
  return (
    <div>
      {projects.map(project => (
        <h1>{project.title}</h1>
      ))}
    </div>
  )
}
