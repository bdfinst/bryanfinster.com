import { Grid } from 'semantic-ui-react'
import React from 'react'

import About from './about'
import Awards from './awards'
import Contact from './contact'
import DataCard from './dataCard'
import Education from './education'
import Interests from './interests'
import Languages from './languages'
import Profiles from './profiles'
import Publications from './publications'
import References from './references'
import Skills from './skills'
import Website from './website'

const Content = (props) => {
  const { resume } = props

  return (
    <Grid.Row>
      <Contact contactDetails={resume.basics} />
      <Website contactDetails={resume.basics} />
      <About summary={resume.basics.summary} />
      <Profiles profilesArr={resume.basics.profiles} />
      <DataCard dataArr={resume.work} name="Work" type="work" />
      <DataCard dataArr={resume.volunteer} name="Volunteer" type="volunteer" />
      <Education dataArr={resume.education} name="Education" />
      <Awards dataArr={resume.awards} name="Awards" />
      <Publications dataArr={resume.publications} name="Publications" />
      <Skills dataArr={resume.skills} name="Skills" />
      <Languages dataArr={resume.languages} name="Languages" />
      <Interests dataArr={resume.interests} name="Interests" />
      <References dataArr={resume.references} name="References" />
    </Grid.Row>
  )
}

export default Content
