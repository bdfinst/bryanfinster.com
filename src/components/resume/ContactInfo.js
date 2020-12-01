import { Chip, Grid, Typography } from '@material-ui/core'
import {
  EmailOutlined,
  GitHub,
  LanguageOutlined,
  LinkedIn,
  ShareOutlined,
  Twitter,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Card from '../common/Card'
import CardContent from '../common/CardContent'

const useStyles = makeStyles((theme) => {
  return {
    title: {
      fontSize: 25,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 18,
      textAlign: 'center',
    },
    info: {
      fontSize: 14,
    },
  }
})

export default (props) => {
  const { basics } = props
  const classes = useStyles()

  const address = `${basics.location.city}, ${basics.location.region}`

  const contacts = [
    {
      icon: EmailOutlined,
      text: basics.email,
      link: `mailto: ${basics.email}`,
    },
    { icon: LanguageOutlined, text: basics.website, link: basics.website },
  ]

  const buildSocialList = (profiles) => {
    let list = []

    if (profiles && profiles.length) {
      list = profiles.map((profile) => {
        let icon
        switch (profile.network.toLowerCase()) {
          case 'linkedin':
            icon = LinkedIn
            break
          case 'github':
            icon = GitHub
            break
          case 'twitter':
            icon = Twitter
            break
          default:
            icon = ShareOutlined
            break
        }
        return { icon: icon, text: profile.username, link: profile.url }
      })
    }
    return list
  }
  const showContacts = () => {
    return contacts
      .concat(buildSocialList(basics.profiles))
      .map((data, index) => {
        return (
          <>
            <Grid item xs>
              <Chip
                label={data.text}
                variant="outlined"
                color="primary"
                size="small"
                icon={<data.icon />}
                clickable
                component="a"
                href={data.link}
              />
            </Grid>
          </>
        )
      })
  }

  return (
    <Card title={basics.name}>
      <CardContent>
        <Typography
          className={classes.subTitle}
          color="textSecondary"
          gutterBottom
        >
          {basics.label} - {address}
        </Typography>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          {showContacts()}
        </Grid>
      </CardContent>
    </Card>
  )
}
