exports.createPages = async ({ actions, graphql }) => {
  const products = await graphql(`
    query MyQuery {
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

  products.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path;
    actions.createPages({
      path: path,
      component: require.resolve('./src/template/productTemplate.js'),
      context: {
        path: path
      }
    })
  })
}