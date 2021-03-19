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

const Education = (props) => {
  const renderData = () => {
    const { dataArr } = props

    return dataArr.map((data) => {
      let endDate = ' - Current'

      if (data.endDate) {
        endDate = ` - ${data.endDate}`
      }

      return (
        <Item key={data.institution}>
          <Item.Content>
            <Item.Header>
              <Header as="h3" floated="left">
                {data.institution}
                <Header.Subheader color="grey">
                  {data.startDate} {endDate}
                </Header.Subheader>
              </Header>
            </Item.Header>
            <Item.Meta>
              <Header as="h4">
                <Icon name="student" color="teal" />
                <Header.Content>
                  {data.area}
                  <Header.Subheader>{data.studyType}</Header.Subheader>
                </Header.Content>
              </Header>
            </Item.Meta>
            <Item.Description>
              <Label as="a" tag size="mini" color="teal">
                GPA: {data.gpa}
              </Label>
            </Item.Description>
            <Item.Extra>
              {data.courses && data.courses.length > 0 ? (
                <List>
                  <List.Item>
                    <Header sub>Courses</Header>
                    {data.courses.map((course) => (
                      <List.List key={course}>
                        <List.Item>
                          <Icon name="right triangle" />
                          <List.Content>
                            <List.Description>{course}</List.Description>
                          </List.Content>
                        </List.Item>
                      </List.List>
                    ))}
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

  const { dataArr, name } = props

  if (!dataArr || dataArr.length === 0) return <Container />

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

export default Education
