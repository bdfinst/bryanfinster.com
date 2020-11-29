import { Grid } from 'semantic-ui-react'
import React from 'react'

import Awards from './awards'
import DataCard from './dataCard'
import Education from './education'
import Interests from './interests'
import Languages from './languages'
import Profiles from './profiles'
import Publications from './publications'
import References from './references'
import Skills from './skills'
import Summary from './Summary'

const Content = (props) => {
  const { resume } = props

  return (
    <Grid.Row>
      <Summary summary={resume.basics.summary} />
      <DataCard dataArr={resume.work} name="Work" type="work" />
      <Education dataArr={resume.education} name="Education" />
      <Awards dataArr={resume.awards} name="Awards" />
      <Publications dataArr={resume.publications} name="Publications" />
      <Skills dataArr={resume.skills} name="Skills" />
      <Languages dataArr={resume.languages} name="Languages" />
      <Interests dataArr={resume.interests} name="Interests" />
    </Grid.Row>
  )
}

export default Content
