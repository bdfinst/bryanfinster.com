import { Container } from '@material-ui/core'
import React from 'react'

import Awards from './AwardList'
// import Education from './education'
import Experience from './Experience'
// import Interests from './interests'
// import Languages from './languages'
import PublishedWorks from './PublishedWorks'
import SkillList from './SkillList'
import Summary from './Summary'

const Content = (props) => {
  const { resume } = props

  return (
    <Container disableGutters={true}>
      <Summary summary={resume.basics.summary} />
      <Experience dataArr={resume.work} name="Experience" type="work" />
      <PublishedWorks dataArr={resume.publications} name="Publications" />
      <Experience
        dataArr={resume.volunteer}
        name="Volunteer Organizations"
        type="volunteer"
      />
      <SkillList dataArr={resume.skills} name="Skills" />
      <Awards dataArr={resume.awards} name="Awards" />

      {/*
      <Education dataArr={resume.education} name="Education" />
      <Languages dataArr={resume.languages} name="Languages" />
      <Interests dataArr={resume.interests} name="Interests" />
      */}
    </Container>
  )
}

export default Content
