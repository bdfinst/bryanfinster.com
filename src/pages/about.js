import { CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image'
import React from 'react'

import Card from '../components/common/Card'
import CardContent from '../components/common/CardContent'
import Layout from '../components/Layout'
import profileImage from '../images/profileImage'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

export default () => {
  const classes = useStyles()

  return (
    <Layout>
      <div style={{ padding: 20, maxWidth: 8600 }}>
        <Card title="About Me">
          <div align="center">
            <img src={profileImage} width="35%" alt="Bryan Finster" />
          </div>
          <CardContent>
            Bryan has been a software developer since 1996 developing supply
            chain solutions for many large enterprises. He is a passionate
            practitioner and evangelist for the principles, technical practices,
            metrics observability, and culture of community sharing and learning
            required to improve organizational outcomes. He currently leads the
            Walmart DevOps Dojo which focuses on helping teams transition to a
            continuous flow of value delivery.
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
