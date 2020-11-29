import { Container, Grid, Header, Icon, Item } from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const Awards = (props) => {
  const renderData = () => {
    const { dataArr, type } = props

    return dataArr.map((data) => {
      return (
        <Item key={data.title}>
          <Item.Content>
            <Item.Header>
              <Header as="h3" floated="left">
                <Icon name="trophy" color="teal" />
                <Header.Content>
                  {data.title}
                  <Header.Subheader>{data.awarder}</Header.Subheader>
                </Header.Content>
              </Header>
            </Item.Header>
            <Item.Meta>
              <Header as="h4">
                <Header.Content>{data.date}</Header.Content>
              </Header>
            </Item.Meta>
            <Item.Description>{data.summary}</Item.Description>
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

export default Awards
