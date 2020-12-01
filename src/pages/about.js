import { Grid } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightBlue } from '@material-ui/core/colors'
import { graphql } from 'gatsby'
import React from 'react'

import Body from '../components/resume/Body'
import ContactInfo from '../components/resume/ContactInfo'
import Layout from '../components/Layout'

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiTypography: {
      color: '#ffffff',
    },
  },
  palette: {
    primary: {
      light: lightBlue[500],
      main: lightBlue[900],
      dark: lightBlue,
      contrastText: '#ffffff',
    },
    secondary: {
      light: blueGrey[500],
      main: blueGrey[900],
      dark: blueGrey,
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiPaper: {
      elevation: 0,
    },
  },
})

const Resume = ({ data }) => {
  const resume = data.resumeYaml
  const { basics } = resume
  console.log(resume)
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <div style={{ padding: 10, maxWidth: 1000}}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ContactInfo basics={basics} />
            </Grid>
            <Grid item xs={12}>
              <Body resume={resume} />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
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
        event
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
