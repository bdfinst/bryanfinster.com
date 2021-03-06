import { Container, Grid, Header, Icon, Label } from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const Interests = (props) => {
  const renderData = () => {
    const { dataArr } = props

    return dataArr.map((data) => (
      <Container key={data.name} className="tagListContainer">
        <Header as="h3">
          <Icon name="hand spock" color="teal" />
          {data.name}
        </Header>
        <p>
          {data.keywords && data.keywords.length > 0 ? (
            data.keywords.map((keyword) => {
              const colors = [
                'red',
                'orange',
                'yellow',
                'olive',
                'green',
                'teal',
                'blue',
                'violet',
                'purple',
                'pink',
                'brown',
                'grey',
                'black',
              ]
              const color = colors[Math.floor(Math.random() * colors.length)]
              return (
                <Label key={keyword} as="a" className="tagItem" color={color}>
                  <Icon name="tag" />
                  {keyword}
                </Label>
              )
            })
          ) : (
            <div />
          )}
        </p>
      </Container>
    ))
  }

  const { dataArr, name } = props

  if (!dataArr || dataArr.length === 0) return <Container />

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

export default Interests
