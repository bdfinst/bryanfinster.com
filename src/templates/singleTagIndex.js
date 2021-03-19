import React from 'react'

import Layout from '../components/Layout'
import PostList from '../components/PostList'

const SingleTagIndex = ({ pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <Layout>
      <h1>PostList about {tagName}</h1>
      <PostList data={posts} />
    </Layout>
  )
}

export default SingleTagIndex
