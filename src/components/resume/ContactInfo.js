import { Card, CardContent, Grid, Link, Typography } from '@material-ui/core'
import {
  EmailOutlined,
  HomeOutlined,
  LanguageOutlined,
} from '@material-ui/icons'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
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
  icon: {
    color: blue[500],
  },
})

const BasicsHeader = (props) => {
  const { basics } = props
  const classes = useStyles()

  const address = `${basics.location.city}, ${basics.location.region}`

  const contacts = [
    { icon: HomeOutlined, text: address },
    {
      icon: EmailOutlined,
      text: basics.email,
      link: `mailto: ${basics.email}`,
    },
    { icon: LanguageOutlined, text: basics.website, link: basics.website },
  ]

  const showContacts = () => {
    return contacts.map((data) => {
      return (
        <>
          <Grid item xs={2}>
            <data.icon className={classes.icon} />
          </Grid>
          <Grid item xs={10}>
            <Typography
              className={classes.info}
              color="textSecondary"
              gutterBottom
            >
              {data.link ? (
                <Link href={data.link}>{data.text}</Link>
              ) : (
                <>{data.text}</>
              )}
            </Typography>
          </Grid>
        </>
      )
    })
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {basics.name}
        </Typography>
        <Typography
          className={classes.subTitle}
          color="textSecondary"
          gutterBottom
        >
          {basics.label}
        </Typography>

        <Grid container direction="row" justify="center" alignItems="center">
          {showContacts()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BasicsHeader
