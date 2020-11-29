import { Container, Grid, Header, Icon, Item } from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const References = (props) => {
  const renderData = () => {
    const { dataArr, type } = props

    return dataArr.map((data) => {
      return (
        <Item key={data.name}>
          <Item.Content>
            <Item.Header>
              <Header as="h3" floated="left">
                <Icon name="star" color="teal" />
                <Header.Content>
                  {data.name}
                  <Header.Subheader>{data.reference}</Header.Subheader>
                </Header.Content>
              </Header>
            </Item.Header>
          </Item.Content>
        </Item>
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
          <Container textAlign="left">
            <Item.Group>{renderData()}</Item.Group>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default References
