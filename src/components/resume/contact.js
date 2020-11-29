import { Container, Grid, Header } from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const Contact = (props) => {
  const { contactDetails } = props

  return (
    <Grid>
      <Grid.Row>
        <SectionLabel name="Contact" />
        <Grid.Column width={11}>
          <Container textAlign="left">
            <Header sub>Email</Header>
            <span>{contactDetails.email}</span>
            <Header sub>Phone</Header>
            <span>{contactDetails.phone}</span>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Contact
