import React from "react"
import { Link } from "gatsby"

import Expertise from "../components/Expertise"
import Work from "../components/Work"
import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import OurClients from "../components/OurClients"
import Footer from "../components/Footer"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <h1 className="text-red-500 font-medium">
        Enviroment variable , {process.env.GATSBY_MY_ENVIRONMENT}
      </h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <div
        className="bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest px-4 py-3 shadow-md my-2"
        role="alert"
      >
        <div className="flex">
          <svg
            className="h-6 w-6 text-teal mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
          <div>
            <p className="font-bold">Tailwind instalado</p>
            <p className="text-sm">tailwind</p>
          </div>
        </div>
      </div>
    </Layout>
    <Expertise />
    <Work />
    <Banner />
    <OurClients />
    <Footer />
  </>
)

export default IndexPage
