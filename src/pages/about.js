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
      <div style={{ padding: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ContactInfo basics={basics} />
          </Grid>
          <Grid item xs>
            <Body resume={resume} />
          </Grid>
        </Grid>
      </div>
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
        position
        website
        startDate
        endDate
        summary
        description
        highlights
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
        keywords
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
        profiles {
          network
          url
          username
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
