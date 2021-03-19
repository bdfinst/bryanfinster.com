import { Container, Grid, Header, Item } from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const Languages = (props) => {
  const renderData = () => {
    const { dataArr } = props

    return dataArr.map((data) => (
      <Item key={data.language}>
        <Item.Content>
          <Item.Header>
            <Header as="h3" floated="left">
              <Header.Content>
                {data.language}
                <Header.Subheader>{data.fluency}</Header.Subheader>
              </Header.Content>
            </Header>
          </Item.Header>
        </Item.Content>
      </Item>
    ))
  }

  const { dataArr, name } = props

  if (!dataArr) return <Container />

  return (
    <Grid>
      <Grid.Row>
        <SectionLabel name={name} />
        <Grid.Column width={11}>
          <Container textAlign="left">
            <Item.Group>{renderData()}</Item.Group>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Languages
