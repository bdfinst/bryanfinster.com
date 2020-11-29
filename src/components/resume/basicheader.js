import { Card, CardContent, Typography } from '@material-ui/core'
import { EmailOutlined, HomeOutlined, WebOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const BasicsHeader = (props) => {
  const { basics } = props
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {basics.name}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {basics.label}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <HomeOutlined />: {basics.location.city}, {basics.location.region}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <EmailOutlined />: {basics.email}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <WebOutlined />: {basics.website}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BasicsHeader
