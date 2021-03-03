/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Fetch your items (blog posts, categories, etc).
  const projects = await graphql(`
    query Projects {
      allSanityProjects {
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
  `)

  // console.log(projects.data.allSanityProjects.nodes)

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: projects.data.allSanityProjects.nodes, // An array of objects

    itemsPerPage: 3, // How many items you want per page
    pathPrefix: "/work", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/work.js`), // Just like `createPage()`
  })

  console.log(projects.data.allSanityProjects.nodes)

  projects.data.allSanityProjects.nodes.forEach(project => {
    createPage({
      path: `/${project.slug.current}`,
      component: path.resolve(`src/templates/project/project.js`),
      context: {
        data: project,
      },
    })
  })
}
