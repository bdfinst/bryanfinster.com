import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import Posts from '../components/Posts'

export default ({ data }) => {
  return (
    <Layout>
      <Posts data={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            description
            headerImage
          }
          excerpt
        }
      }
    }
  }
`
