import { Container } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import Body from '../components/resume/Body'
import ContactInfo from '../components/resume/ContactInfo'
import Layout from '../components/Layout'

const Resume = ({ data }) => {
  const resume = data.resumeYaml
  const { basics } = resume
  console.log(resume)
  return (
    <Layout>
      <Container fluid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ContactInfo basics={basics} />
          </Grid>
          <Grid item xs>
            <Body resume={resume} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Resume

export const query = graphql`
  query MyQuery {
    resumeYaml {
      work {
        company
        location
        description
        position
        website
        startDate
        endDate
        summary
      }
      volunteer {
        organization
        position
        website
        startDate
        endDate
        summary
      }
      skills {
        name
        level
      }
      references {
        name
        reference
      }
      publications {
        name
        publisher
        releaseDate
        website
        summary
      }
      projects {
        name
        description
        startDate
        endDate
        website
        entity
        type
      }
      languages {
        language
        fluency
      }
      internal {
        content
        description
        ignoreType
        mediaType
      }
      interests {
        name
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
        gpa
      }
      basics {
        name
        label
        picture
        email
        phone
        website
        summary
        location {
          city
          region
        }
      }
      awards {
        title
        date
        awarder
        summary
      }
    }
  }
`
