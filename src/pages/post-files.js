import { graphql } from 'gatsby'
import React from 'react'

const PostFiles = ({ data }) => (
  <>
    <h1>My Site&apos;s Files</h1>
    <table>
      <thead>
        <tr>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </tr>
      </thead>
      <tbody>
        {data.allFile.edges.map(({ node }) => (
          <tr key={node.relativePath}>
            <td>{node.relativePath}</td>
            <td>{node.prettySize}</td>
            <td>{node.extension}</td>
            <td>{node.birthTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default PostFiles
