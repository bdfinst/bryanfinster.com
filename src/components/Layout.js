import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  padding: 20px;
`

const Query = graphql`
  query {
    site {
      siteMetadata {
        title
        authorName
      }
    }
  }
`

export default ({ children }) => (
  <StaticQuery
    query={Query}
    render={(data) => {
      const { title, siteDescription, authorName } = data.site.siteMetadata
      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={siteDescription} />
            <title>{title}</title>
          </Helmet>
          <Container>
            <Sidebar title={title} authorName={authorName} />
            <Content>{children}</Content>
          </Container>
        </>
      )
    }}
  />
)
