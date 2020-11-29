import { Container, Grid, Icon, Label } from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const Contact = (props) => {
  const { contactDetails } = props

  return (
    <Grid>
      <Grid.Row>
        <SectionLabel name="Website" />
        <Grid.Column width={11}>
          <Container textAlign="left">
            <Label as="a" href={contactDetails.website} target="_blank">
              <Icon name="linkify" color="teal" />
              {contactDetails.website}
            </Label>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Contact
