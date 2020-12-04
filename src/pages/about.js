import { Paper } from '@material-ui/core'
import React from 'react'

import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <div style={{ padding: 10, maxWidth: 1000 }}>
        <Paper>
          Bryan Finster has been a software developer since 1996 developing
          supply chain solutions for many large enterprises. He is a passionate
          practitioner and evangelist for the principles, technical practices,
          metrics observability, and culture of community sharing and learning
          required to improve organizational outcomes. He currently leads the
          Walmart DevOps Dojo which focuses on helping teams transition to a
          continuous flow of value delivery.
        </Paper>
      </div>
    </Layout>
  )
}
