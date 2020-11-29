import { Container } from '@material-ui/core'
import { Grid } from 'semantic-ui-react'
import React from 'react'

import Awards from './awards'
import DataCard from './dataCard'
import Education from './education'
import Interests from './interests'
import Languages from './languages'
import Publications from './publications'
import Skills from './skills'
import Summary from './Summary'

const Content = (props) => {
  const { resume } = props

  return (
    <Container>
      <Summary summary={resume.basics.summary} />
      {/* <DataCard dataArr={resume.work} name="Work" type="work" />
      <Education dataArr={resume.education} name="Education" />
      <Awards dataArr={resume.awards} name="Awards" />
      <Publications dataArr={resume.publications} name="Publications" />
      <Skills dataArr={resume.skills} name="Skills" />
      <Languages dataArr={resume.languages} name="Languages" />
      <Interests dataArr={resume.interests} name="Interests" /> */}
    </Container>
  )
}

export default Content
