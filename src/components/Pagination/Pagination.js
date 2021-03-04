import React from "react"
import PropType from "prop-types"
import { Link } from "gatsby"

export default function Pagination(props) {
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div>
      {previousPagePath && <Link to={previousPagePath}>Atras</Link>}
      {nextPagePath && <Link to={nextPagePath}>Siguiente</Link>}
    </div>
  )
}

Pagination.prototype = {
  pageContext: PropType.object.isRequired,
}
