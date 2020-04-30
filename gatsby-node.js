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
    actions.createPage({
      path: path,
      component: require.resolve('./src/templates/productTemplate.js'),
      context: {
        path: path
      }
    })
  })

  const articles = await graphql(`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
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

  articles.data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path;
    actions.createPage({
      path: path,
      component: require.resolve('./src/templates/articleTemplate.js'),
      context: {
        path: path
      }
    })
  })
}