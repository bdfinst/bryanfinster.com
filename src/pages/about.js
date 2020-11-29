import { Container } from 'semantic-ui-react'
import { Grid, Paper } from '@material-ui/core'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import BasicsHeader from '../components/resume/basicheader'
import Content from '../components/resume/content'
import Layout from '../components/Layout'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }
})

const Resume = ({ data }) => {
  const classes = useStyles()

  const resume = data.resumeYaml
  const { basics } = resume
  console.log(resume)
  return (
    <Layout>
      <Container fluid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <BasicsHeader basics={basics} />
          </Grid>
          <Grid item xs>
            {/* <Content resume={resume} /> */}
            WIP
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
