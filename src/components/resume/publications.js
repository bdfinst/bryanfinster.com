import {
  Container,
  Grid,
  Header,
  Icon,
  Label,
  Message,
} from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const Publications = (props) => {
  const renderData = () => {
    const { dataArr, type } = props

    return dataArr.map((data) => {
      return (
        <Message icon key={data.name}>
          <Icon name="book" size="mini" />
          <Message.Content>
            <Message.Header>
              {data.name}

              <Header as="h5" color="grey">
                {data.releaseDate}
                <Label as="a" href={data.website} target="_blank" size="mini">
                  <Icon name="linkify" color="teal" />
                  {data.website}
                </Label>
              </Header>
            </Message.Header>
            <Label as="a" tag size="mini" color="teal">
              by: {data.publisher}
            </Label>
            <Container textAlign="justified">
              <p>{data.summary}</p>
            </Container>
          </Message.Content>
        </Message>
      )
    })
  }

  const { dataArr, name } = props

  if (!dataArr || dataArr.length === 0) return <Container></Container>

  return (
    <Grid>
      <Grid.Row>
        <SectionLabel name={name} />
        <Grid.Column width={11}>
          <Container textAlign="left">{renderData()}</Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Publications
