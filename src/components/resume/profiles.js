import { Button, Container, Grid } from 'semantic-ui-react'
import React from 'react'

import SectionLabel from './sectionLabel'

const Profiles = (props) => {
  const renderProfiles = () => {
    const { profilesArr } = props

    return profilesArr.map((profile) => {
      const iconName = profile.network.toLowerCase()
      let iconCSS = iconName
      if (iconName === 'github') {
        iconCSS = 'grey'
      }
      return (
        <Button
          key={profile.network}
          as="a"
          href={profile.url}
          target="_blank"
          content={profile.username}
          color={iconCSS}
          icon={iconName}
        />
      )
    })
  }

  const { profilesArr } = props

  if (!profilesArr || profilesArr.length === 0) return <Container></Container>

  return (
    <Grid>
      <Grid.Row>
        <SectionLabel name="Profiles" />
        <Grid.Column width={11}>
          <Container textAlign="left">{renderProfiles()}</Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Profiles
