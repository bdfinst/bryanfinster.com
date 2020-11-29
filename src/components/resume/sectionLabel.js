import { Grid, Header } from 'semantic-ui-react'
import React from 'react'

const SectionLabel = (props) => {
  const { name } = props

  return (
    <Grid.Column width={5} textAlign="right">
      <Header size="medium" color="teal">
        {name}
      </Header>
    </Grid.Column>
  )
}

export default SectionLabel
