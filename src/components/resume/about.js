import { Container, Grid } from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const About = (props) => {
  const { summary } = props

  return (
    <Grid>
      <Grid.Row>
        <SectionLabel name="About" />
        <Grid.Column width={11}>
          <Container textAlign="justified">
            <p>{summary}</p>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default About
