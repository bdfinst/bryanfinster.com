import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'
import PostTags from '../components/PostTags'

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const PostDate = styled.span`
  color: #8e8e8e;
  font-size: 14px;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-style: italic;
`

export default ({ data }) => {
  return (
    <>
      {data.map(({ node }) => {
        return (
          <div key={node.id}>
            <PostDate>{node.frontmatter.date}</PostDate>{' '}
            <PostLink to={node.fields.slug}>
              <PostTitle>{node.frontmatter.title} </PostTitle>
            </PostLink>
            <div>
              <img src={node.frontmatter.headerImage} width="100px" alt="Header"></img>
              <br/>
              {node.frontmatter.description}
            </div>
            <PostTags tags={node.frontmatter.tags} />
            <hr />
          </div>
        )
      })}
    </>
  )
}
