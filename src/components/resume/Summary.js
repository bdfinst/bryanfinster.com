import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'blue',
  },
  text: {
    fontSize: 14,
    textAlign: 'justified',
  },
})

const About = (props) => {
  const { summary } = props
  const classes = useStyles()

  return (
    <Card>
      <CardHeader title="Summary" className={classes.title} />
      <CardContent>
        <Typography className={classes.text} color="textSecondary" gutterBottom>
          {summary}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default About
