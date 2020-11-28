import React from 'react'

import Layout from '../components/Layout'
import PostList from '../components/PostList'

export default ({ data, pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <Layout>
      <h1>PostList about {tagName}</h1>
      <PostList data={posts} />
    </Layout>
  )
}
