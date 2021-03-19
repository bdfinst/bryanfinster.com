import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Card from '../common/Card'
import CardContent from '../common/CardContent'

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 14,
    textAlign: 'justified',
    color: theme.palette.primary.dark,
  },
}))

export default (props) => {
  const { summary } = props
  const classes = useStyles()

  return (
    <Card title="Summary">
      <CardContent>
        <Typography className={classes.text} gutterBottom>
          {summary}
        </Typography>
      </CardContent>
    </Card>
  )
}
