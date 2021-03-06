import React from 'react'

import Card from '../components/common/Card'
import CardContent from '../components/common/CardContent'
import Layout from '../components/Layout'
import profileImage from '../images/profileImage'

const About = () => (
  <Layout>
    <div style={{ padding: 20, maxWidth: 8600 }}>
      <Card title="About Me">
        <div align="center">
          <img src={profileImage} width="35%" alt="Bryan Finster" />
        </div>
        <CardContent>
          <p>
            I am a developer, technical lead, product owner, value stream
            architect, and passionate advocate for the organizational and
            culture changes needed to optimize the flow of value to the
            customer. I use my experience developing enterprise supply chain
            solutions to apply lean supply chain thinking to software delivery
            to minimize costs and maximize delivered quality.
          </p>
          <p>
            I practice and mentor disciplined continuous delivery practices and
            DevOps principles. I use data-driven approaches to optimize the flow
            of value, improve business outcomes, and improve the lives of
            software engineers.
          </p>
          <p>
            My preferred way to see the world is from my motorcycle. Every
            corner is an opportunity for continuous improvement of the skills
            needed to stay safe in an unpredictable world. I use my risk budget
            for fun, I prefer to optimize my development workflow to minimize
            risk and drama. Don&apos;t be Batman. Optimize for sleep.
          </p>
        </CardContent>
      </Card>
    </div>
  </Layout>
)

export default About
