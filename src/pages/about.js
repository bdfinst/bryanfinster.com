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
            Bryan is an experienced value stream architect, technical lead,
            product owner, and passionate advocate for organizational
            improvement required to optimize the flow of delivery. With over two
            decades of experience developing enterprise supply chain solutions,
            he applies lean supply chain thinking to the problem of software
            delivery to minimize costs and maximize delivered quality.
            <br />
            He is a practitioner and mentor of continuous delivery practices and
            DevOps principles who uses data-driven approaches to optimize the
            flow of value, improve business outcomes, and improve the lives of
            software engineers.
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
