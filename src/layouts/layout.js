/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Expertise from "../components/Expertise"
import Work from "../components/Work"
import Banner from "../components/Banner"
import OurClients from "../components/OurClients"
import { FooterOne, Footer } from "../components/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <div className="md:ml-24 mr-4">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Expertise />
        <Work />
        <Banner />
        <OurClients />
      </div>
      <FooterOne />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
