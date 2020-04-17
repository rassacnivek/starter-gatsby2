import React from "react"
import { graphql } from 'gatsby'

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            image
            price
            title
          }
        }
      }
    }
  }
`

const Products = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {
          data.allMarkdownRemark.edges.map((product) => {
            return <tr key={product.node.frontmatter.image}>
              <td>{product.node.frontmatter.title}</td>
              <td>{product.node.frontmatter.price} €</td>
              <td>{product.node.frontmatter.description}</td>
              <td><img src={product.node.frontmatter.image} alt="" /></td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default Products