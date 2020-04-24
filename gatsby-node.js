exports.createPages = async ({ actions, graphql }) => {
  const products = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  products.data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path;
    actions.createPages({
      path: path,
      component: require.resolve('./src/templates/productTemplate.js'),
      context: {
        path: path
      }
    })
  })
}