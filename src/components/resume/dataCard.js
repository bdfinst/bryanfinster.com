import {
  Container,
  Grid,
  Header,
  Icon,
  Item,
  Label,
  List,
} from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const DataCard = (props) => {
  const renderData = () => {
    const { dataArr, type } = props

    return dataArr.map((data) => {
      let endDate = ' - Current'
      let entityName = ''
      let iconName = 'suitcase'
      if (type == 'work') {
        entityName = data.company
      } else if (type == 'volunteer') {
        entityName = data.organization
        iconName = 'world'
      }

      if (data.endDate) {
        endDate = ` - ${data.endDate}`
      }

      return (
        <Item key={entityName}>
          <Item.Content>
            <Item.Header>
              <Header as="h3">
                <Icon name={iconName} color="grey" />
                <Header.Content>
                  {entityName}
                  <Header.Subheader>
                    <Label
                      as="a"
                      href={data.website}
                      target="_blank"
                      size="mini"
                    >
                      <Icon name="linkify" color="teal" />
                      {data.website}
                    </Label>
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Item.Header>
            <Item.Meta>
              <Header as="h4">
                {data.position}
                <Header.Subheader color="grey">
                  {data.startDate} {endDate}
                </Header.Subheader>
              </Header>
            </Item.Meta>
            <Item.Description>{data.summary}</Item.Description>
            <Item.Extra>
              {data.highlights && data.highlights.length > 0 ? (
                <List>
                  <List.Item>
                    <Header sub>Highlights</Header>
                    {data.highlights.map((highlight) => {
                      return (
                        <List.List key={highlight}>
                          <List.Item>
                            <Icon name="right triangle" />
                            <List.Content>
                              <List.Description>{highlight}</List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      )
                    })}
                  </List.Item>
                </List>
              ) : (
                ''
              )}
            </Item.Extra>
          </Item.Content>
        </Item>
      )
    })
  }

  const { dataArr, name, type } = props

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

export default DataCard
