const axios = require('axios');


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
   const result = await graphql(
    `
      {
        allRestApiApiProducts {
          edges {
            node {
              name
              category
              date
              description
              id
              price
              slug
              image {
                high
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }


    // Create blog articles pages.
    const products = result.data.allRestApiApiProducts.edges
    const ProductTemplate = require.resolve("./src/templates/ProductDetails.js")


    products.forEach((product, index) => {
      createPage({
        path: `/product/${product.node.slug}`,
        component: ProductTemplate,
        context: {
          slug: product.node.slug,
        },
      })
    })
  }


// page.matchPath is a special key that's used for matching pages
  // only on the client.
  exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }
  }