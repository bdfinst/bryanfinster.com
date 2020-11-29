import { Card, CardContent, Grid, Link, Typography } from '@material-ui/core'
import {
  EmailOutlined,
  HomeOutlined,
  LanguageOutlined,
} from '@material-ui/icons'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
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

  const emailLink = `mailto: ${basics.email}`
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
          <Grid item xs={2}>
            <HomeOutlined className={classes.icon} />
          </Grid>
          <Grid item xs={10}>
            <Typography
              className={classes.info}
              color="textSecondary"
              gutterBottom
            >
              {basics.location.city}, {basics.location.region}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <EmailOutlined className={classes.icon} />
          </Grid>
          <Grid item xs={10}>
            <Typography
              className={classes.info}
              color="textSecondary"
              gutterBottom
            >
              <Link href={emailLink}>{basics.email}</Link>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <LanguageOutlined className={classes.icon} />
          </Grid>
          <Grid item xs={10}>
            <Typography
              className={classes.info}
              color="textSecondary"
              gutterBottom
            >
              <Link href={basics.website}>{basics.website}</Link>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BasicsHeader
