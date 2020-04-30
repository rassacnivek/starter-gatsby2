import React from 'react'
import { graphql } from "gatsby"

export default ({data}) => {
  return (
    <div>
      <h1>
        {data.markdownRemark.frontmatter.title}
      </h1>
      <img alt={data.markdownRemark.frontmatter.title} src={data.markdownRemark.frontmatter.image}/>
    </div>
  )
}

export const query = graphql`
  query($path: String!){
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      frontmatter{
        title,
        image
      }
    }
  }
`