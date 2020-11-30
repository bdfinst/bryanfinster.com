import { Container } from '@material-ui/core'
import React from 'react'

import Awards from './awards'
import Education from './education'
import Experience from './Experience'
import Interests from './interests'
import Languages from './languages'
import PublishedWorks from './PublishedWorks'
import SkillList from './SkillList'
import Summary from './Summary'

const Content = (props) => {
  const { resume } = props

  return (
    <Container>
      <Summary summary={resume.basics.summary} />
      <Experience dataArr={resume.work} name="Work" type="work" />
      <SkillList dataArr={resume.skills} name="Skills" />
      <PublishedWorks dataArr={resume.publications} name="Publications" />

      {/* <Education dataArr={resume.education} name="Education" />
      <Awards dataArr={resume.awards} name="Awards" />
      <Languages dataArr={resume.languages} name="Languages" />
      <Interests dataArr={resume.interests} name="Interests" /> */}
    </Container>
  )
}

export default Content
