import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <h3>List of Tags</h3>
      <ul>
        {pageContext.tags.map((tag) => {
          const path = `/tags/${tag}`

          return (
            <li key={tag}>
              <Link to={path}>{tag}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
