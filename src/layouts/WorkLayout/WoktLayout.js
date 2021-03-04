import React from "react"

import PropTypes from "prop-types"

export default function WorkLayout(props) {
  const { children } = props
  return <>{children}</>
}

WorkLayout.propTypes = {
  siteTitle: PropTypes.string,
}
