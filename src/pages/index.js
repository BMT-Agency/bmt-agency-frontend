import React from "react"
import { Link } from "gatsby"

import Expertise from "../components/Expertise"
import Work from "../components/Work"
import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Font from "../components/Font"
import Banner from "../components/Banner"
import OurClients from "../components/OurClients"
import { FooterOne, Footer } from "../components/Footer"

const IndexPage = () => (
  <>
    <Layout>
      <Font />
      <SEO title="Home" />
    </Layout>
    <Expertise />
    <Work />
    <Banner />
    <OurClients />
    <FooterOne />
    <Footer />
  </>
)

export default IndexPage
