import React from "react"
import { graphql } from "gatsby"
import WorkLayout from "../layouts/WorkLayout"
import ProjectsList from "../components/ProjectsList"
import Pagination from "../components/Pagination"
import { Footer, FooterOne } from "../components/Footer"
import Nav from "../components/Nav"

export default function Project(props) {
  const { data, pageContext } = props
  const projects = data.allSanityProjects.nodes
  return (
    <WorkLayout>
      <Nav />
      <ProjectsList projects={projects} />
      <Pagination pageContext={pageContext} />
      <FooterOne />
      <Footer />
    </WorkLayout>
  )
}
export const query = graphql`
  query Projects($skip: Int!, $limit: Int!) {
    allSanityProjects(skip: $skip, limit: $limit) {
      nodes {
        id
        title
        year
        challenge
        idea
        inspiration
        process
        projectCategory
        client
        mainImage {
          asset {
            fixed {
              width
            }
            url
          }
        }
        slug {
          current
        }
        challengImage {
          asset {
            fixed {
              width
            }
            url
          }
        }
        inspirationImage {
          asset {
            fixed {
              width
            }
            url
          }
        }
        ideaImage {
          asset {
            fixed {
              width
            }
            url
          }
        }
        processImage {
          asset {
            fixed {
              width
            }
            url
          }
        }
        logoClient {
          asset {
            url
          }
        }
      }
    }
  }
`
